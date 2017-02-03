using IdentityServer4;
using Julio.Francisco.De.Iriarte.IdentityServer.ApiConfiguration;
using Julio.Francisco.De.Iriarte.IdentityServer.Caching;
using Microsoft.AspNetCore.Authentication.OpenIdConnect;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.DataProtection;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Caching.Distributed;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using Microsoft.IdentityModel.Protocols.OpenIdConnect;
using Microsoft.IdentityModel.Tokens;

namespace Julio.Francisco.De.Iriarte.IdentityServer
{
    public class Startup
    {
        public IConfigurationRoot Configuration { get; set; }

        public Startup(IHostingEnvironment env)
        {
            // Set up configuration sources.
            Configuration = new ConfigurationBuilder()
                .SetBasePath(env.ContentRootPath)
                //.AddJsonFile("config.json")
                .AddJsonFile("appsettings.json")
                .Build();
        }
        
        // This method gets called by the runtime. Use this method to add services to the container.
        // For more information on how to configure your application, visit https://go.microsoft.com/fwlink/?LinkID=398940
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddCors(options =>
            {
                options.AddPolicy("AllowSpecificOrigin",
                    builder => builder
                    .AllowAnyMethod()
                    .AllowAnyOrigin()
                    .AllowAnyHeader());
            });

            // For use with CachedPropertiesDataFormat. In load-balanced scenarios 
            // you should use a persistent cache such as Redis or SQL Server.
            services.AddDistributedMemoryCache();

            /*services
            .AddIdentityServer()
            .AddTemporarySigningCredential()
            .AddInMemoryApiResources(Config.GetApiResources())
            .AddInMemoryClients(Config.GetClients());*/
            services.AddIdentityServer()
                .AddInMemoryApiResources(Config.GetApiResources())
                .AddInMemoryClients(Config.GetClients());
                //.AddInMemoryUsers(Config.GetUsers());
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IHostingEnvironment env, ILoggerFactory loggerFactory)
        {
            loggerFactory.AddConsole(LogLevel.Debug);
            //app.UseDeveloperExceptionPage();
            
            app.UseCors("AllowSpecificOrigin");
            
            app.UseIdentityServer();

            app.UseCookieAuthentication(new CookieAuthenticationOptions
            {
                AuthenticationScheme = IdentityServerConstants.ExternalCookieAuthenticationScheme,

                AutomaticAuthenticate = false,
                AutomaticChallenge = false
            });

            var schemeName = "oidc";   
            var dataProtectionProvider = app.ApplicationServices.GetRequiredService<IDataProtectionProvider>();
            var distributedCache = app.ApplicationServices.GetRequiredService<IDistributedCache>();

            var dataProtector = dataProtectionProvider.CreateProtector(
                typeof(OpenIdConnectMiddleware).FullName,
                typeof(string).FullName, schemeName,
                "v1");

            var dataFormat = new CachedPropertiesDataFormat(distributedCache, dataProtector); 
            var clientId = Configuration["oidc:ClientId"];
            var clientSecret = Configuration["oidc:ClientSecret"];
            var authority = string.Format(Configuration["oidc:AadInstance"], Configuration["oidc:Tenant"]);
            //var resource = "https://graph.windows.net";
            // middleware for external openid connect authentication
            app.UseOpenIdConnectAuthentication(new OpenIdConnectOptions
            {
                /*SignInScheme = IdentityServerConstants.ExternalCookieAuthenticationScheme,
                SignOutScheme = IdentityServerConstants.SignoutScheme,
                AuthenticationScheme = "oidc",
                DisplayName = "OpenID Connect",
                Authority = authority,
                ClientId = "implicit",

                TokenValidationParameters = new TokenValidationParameters
                {
                    NameClaimType = "name",
                    RoleClaimType = "role"
                }*/
                AuthenticationScheme = schemeName,
                DisplayName = "AzureAD",
                SignInScheme = IdentityServerConstants.ExternalCookieAuthenticationScheme,
                ClientId = clientId,
                Authority = authority,
                ResponseType = OpenIdConnectResponseType.IdToken,
                StateDataFormat = dataFormat
            });

            /*loggerFactory.AddConsole();

            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }

            app.Run(async (context) =>
            {
                await context.Response.WriteAsync("Hello World!");
            });*/
        }
    }
}
