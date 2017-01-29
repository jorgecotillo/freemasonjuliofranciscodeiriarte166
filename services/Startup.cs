using System;
using System.Collections.Generic;
using System.Linq;
using System.Text.Encodings.Web;
using System.Threading.Tasks;
using Julio.Francisco.De.Iriarte.Business.Services.Common;
using Julio.Francisco.De.Iriarte.Data;
using Microsoft.AspNetCore.Authentication.Cookies;
using Microsoft.AspNetCore.Authentication.OpenIdConnect;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Http.Authentication;
using Microsoft.AspNetCore.Http.Extensions;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using Microsoft.IdentityModel.Clients.ActiveDirectory;
using Microsoft.IdentityModel.Protocols.OpenIdConnect;

namespace Julio.Francisco.De.Iriarte
{
    public class Startup
    {
        public Startup(IHostingEnvironment env)
        {
            var builder = new ConfigurationBuilder()
                .SetBasePath(env.ContentRootPath)
                .AddJsonFile("appsettings.json", optional: true, reloadOnChange: true)
                .AddJsonFile($"appsettings.{env.EnvironmentName}.json", optional: true);

            if (env.IsDevelopment())
            {
                // For more details on using the user secret store see https://go.microsoft.com/fwlink/?LinkID=532709
                builder.AddUserSecrets();
            }

            builder.AddEnvironmentVariables();
            Configuration = builder.Build();
        }

        public IConfigurationRoot Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddMvc();
            services.AddApiVersioning();
            services.AddScoped<IDbContext, ApplicationDbContext>();
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IHostingEnvironment env, ILoggerFactory loggerFactory)
        {
            loggerFactory.AddConsole(Configuration.GetSection("Logging"));
            loggerFactory.AddDebug();

            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
                app.UseDatabaseErrorPage();
                app.UseBrowserLink();
            }
            else
            {
                app.UseExceptionHandler("/Home/Error");
            }

            app.UseStaticFiles();

            //app.UseIdentity();

            // Add external authentication middleware below. 
            // To configure them please see https://go.microsoft.com/fwlink/?LinkID=532715

            /*var clientId = Configuration["AzureAd:ClientId"];
            var clientSecret = Configuration["AzureAd:ClientSecret"];
            var authority = string.Format(Configuration["AzureAd:AadInstance"], Configuration["AzureAd:Tenant"]);
            var resource = "https://graph.windows.net";
            app.UseOpenIdConnectAuthentication(new OpenIdConnectOptions
            {
                ClientId = clientId,
                ClientSecret = clientSecret, // for code flow
                Authority = authority,
                ResponseType = OpenIdConnectResponseType.CodeIdToken,
                PostLogoutRedirectUri = "/signed-out",
                // GetClaimsFromUserInfoEndpoint = true,
                Events = new OpenIdConnectEvents()
                {
                    OnAuthorizationCodeReceived = async context =>
                    {
                        var request = context.HttpContext.Request;
                        var currentUri = 
                            UriHelper.BuildAbsolute(
                                request.Scheme, 
                                request.Host, 
                                request.PathBase, 
                                request.Path);
                        var credential = new ClientCredential(clientId, clientSecret);
                        var authContext = 
                            new AuthenticationContext(
                                authority, 
                                AuthPropertiesTokenCache.ForCodeRedemption(context.Properties));

                        var result = await authContext.AcquireTokenByAuthorizationCodeAsync(
                            context.ProtocolMessage.Code, new Uri(currentUri), credential, resource);

                        context.HandleCodeRedemption(result.AccessToken, result.IdToken);
                    }
                }
            });

            app.Run(async context =>
            {
                if (context.Request.Path.Equals("/signin"))
                {
                    if (context.User.Identities.Any(identity => identity.IsAuthenticated))
                    {
                        // User has already signed in
                        context.Response.Redirect("/");
                        return;
                    }

                    await context.Authentication.ChallengeAsync(
                        OpenIdConnectDefaults.AuthenticationScheme,
                        new AuthenticationProperties { RedirectUri = "/" });
                }
                else if (context.Request.Path.Equals("/signout"))
                {
                    await context.Authentication.SignOutAsync(CookieAuthenticationDefaults.AuthenticationScheme);
                    await WriteHtmlAsync(context.Response,
                        async response =>
                        {
                            await response.WriteAsync($"<h1>Signed out locally: {HtmlEncode(context.User.Identity.Name)}</h1>");
                            await response.WriteAsync("<a class=\"btn btn-primary\" href=\"/\">Sign In</a>");
                        });
                }
                else if (context.Request.Path.Equals("/signout-remote"))
                {
                    await context.Authentication.SignOutAsync(CookieAuthenticationDefaults.AuthenticationScheme);
                    await context.Authentication.SignOutAsync(OpenIdConnectDefaults.AuthenticationScheme);
                }
                else if (context.Request.Path.Equals("/signed-out"))
                {
                    await WriteHtmlAsync(context.Response, 
                        async response =>
                        {
                            await response.WriteAsync($"<h1>You have been signed out.</h1>");
                            await response.WriteAsync("<a class=\"btn btn-primary\" href=\"/signin\">Sign In</a>");
                        });
                }
                else if (context.Request.Path.Equals("/remote-signedout"))
                {
                    await context.Authentication.SignOutAsync(CookieAuthenticationDefaults.AuthenticationScheme);
                    await WriteHtmlAsync(context.Response,
                        async response =>
                        {
                            await response.WriteAsync($"<h1>Signed out remotely: {HtmlEncode(context.User.Identity.Name)}</h1>");
                            await response.WriteAsync("<a class=\"btn btn-primary\" href=\"/\">Sign In</a>");
                        });
                }
                else
                {
                    if (!context.User.Identities.Any(identity => identity.IsAuthenticated))
                    {
                        await context.Authentication.ChallengeAsync(OpenIdConnectDefaults.AuthenticationScheme, new AuthenticationProperties { RedirectUri = "/" });
                        return;
                    }

                    await WriteHtmlAsync(context.Response, async response =>
                    {
                        await response.WriteAsync($"<h1>Hello Authenticated User {HtmlEncode(context.User.Identity.Name)}</h1>");
                        await response.WriteAsync("<a class=\"btn btn-default\" href=\"/signout\">Sign Out Locally</a>");
                        await response.WriteAsync("<a class=\"btn btn-default\" href=\"/signout-remote\">Sign Out Remotely</a>");

                        await response.WriteAsync("<h2>Claims:</h2>");
                        await WriteTableHeader(response, new string[] { "Claim Type", "Value" }, context.User.Claims.Select(c => new string[] { c.Type, c.Value }));

                        await response.WriteAsync("<h2>Tokens:</h2>");
                        try
                        {
                            // Use ADAL to get the right token
                            var authContext = new AuthenticationContext(authority, AuthPropertiesTokenCache.ForApiCalls(context, CookieAuthenticationDefaults.AuthenticationScheme));
                            var credential = new ClientCredential(clientId, clientSecret);
                            string userObjectID = context.User.FindFirst("http://schemas.microsoft.com/identity/claims/objectidentifier").Value;
                            var result = await authContext.AcquireTokenSilentAsync(resource, credential, new UserIdentifier(userObjectID, UserIdentifierType.UniqueId));

                            await response.WriteAsync($"<h3>access_token</h3><code>{HtmlEncode(result.AccessToken)}</code><br>");
                        }
                        catch (Exception ex)
                        {
                            await response.WriteAsync($"AquireToken error: {ex.Message}");
                        }
                    });
                }
            });
            */
            app.UseIdentityServerAuthentication(new IdentityServerAuthenticationOptions
            {
                Authority = "http://localhost:5000",
                RequireHttpsMetadata = false,

                ApiName = "api1"
            });

            app.UseMvc();/*routes =>
            {
                routes.MapRoute(
                    name: "default",
                    template: "{controller=Home}/{action=Index}/{id?}");
            });*/
        }

        private static async Task WriteHtmlAsync(HttpResponse response, Func<HttpResponse, Task> writeContent)
        {
            var bootstrap = "<link rel=\"stylesheet\" href=\"https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css\" integrity=\"sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u\" crossorigin=\"anonymous\">";

            response.ContentType = "text/html";
            await response.WriteAsync($"<html><head>{bootstrap}</head><body><div class=\"container\">");
            await writeContent(response);
            await response.WriteAsync("</div></body></html>");
        }

        private static async Task WriteTableHeader(HttpResponse response, IEnumerable<string> columns, IEnumerable<IEnumerable<string>> data)
        {
            await response.WriteAsync("<table class=\"table table-condensed\">");
            await response.WriteAsync("<tr>");
            foreach (var column in columns)
            {
                await response.WriteAsync($"<th>{HtmlEncode(column)}</th>");
            }
            await response.WriteAsync("</tr>");
            foreach (var row in data)
            {
                await response.WriteAsync("<tr>");
                foreach (var column in row)
                {
                    await response.WriteAsync($"<td>{HtmlEncode(column)}</td>");
                }
                await response.WriteAsync("</tr>");
            }
            await response.WriteAsync("</table>");
        }

        private static string HtmlEncode(string content) =>
            string.IsNullOrEmpty(content) ? string.Empty : HtmlEncoder.Default.Encode(content);
    }
}
