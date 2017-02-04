using System.Collections.Generic;
using IdentityServer4;
using IdentityServer4.Models;

namespace Julio.Francisco.De.Iriarte.IdentityServer.ApiConfiguration
{
    public class Config
    {
        //This method is needed otherwise IdentiyServer4 was throwing an exception
        //related to invalid scope: openid
        public static List<IdentityResource> GetIdentityResources()
        {
            return new List<IdentityResource>
            {
                new IdentityResources.OpenId(),
                new IdentityResources.Profile() // <-- usefull
            };
        }
        
        public static IEnumerable<ApiResource> GetApiResources()
        {
            return new List<ApiResource>
            {
                new ApiResource("api1", "My API")
            };
        }

        public static IEnumerable<Client> GetClients()
        {
            return new List<Client>
            {
                /*new Client
                {
                    ClientId = "d2243c0b-d9bf-49b5-acf4-c406ccaee06e",

                    // no interactive user, use the clientid/secret for authentication
                    AllowedGrantTypes = GrantTypes.ClientCredentials,

                    // secret for authentication
                    ClientSecrets =
                    {
                        new Secret("VUdPR5HIlKLe4sVmMe6JbZk8v/JMZC5qy8VY2Chdfrg=".Sha256())
                    },

                    // scopes that client has access to
                    AllowedScopes = { "api1" }
                },*/
                new Client
                {
                    ClientId = "js",
                    ClientName = "JavaScript Client",
                    AllowedGrantTypes = GrantTypes.Implicit,
                    AllowAccessTokensViaBrowser = true,

                    RedirectUris =           { "http://localhost:4040/callback" },
                    PostLogoutRedirectUris = { "http://localhost:4040/home" },
                    AllowedCorsOrigins =     { "http://localhost:4040" },

                    AllowedScopes =
                    {
                        IdentityServerConstants.StandardScopes.OpenId,
                        IdentityServerConstants.StandardScopes.Profile,
                        "api1"
                    }
                }
            };
        }
    }
}