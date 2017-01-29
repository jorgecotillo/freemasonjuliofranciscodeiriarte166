using System.Collections.Generic;
using IdentityServer4.Models;

namespace Julio.Francisco.De.Iriarte.IdentityServer.ApiConfiguration
{
    public class Config
    {
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
                new Client
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
                }
            };
        }
    }
}