using System.Net;
using System.Net.Http;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace Julio.Francisco.De.Iriarte.Controllers
{
    [ApiVersion( "1.0" )]
    [Route( "api/v{version:apiVersion}/[controller]" )]
    [Authorize]
    public class OrganizationChartController : Controller
    {
        [HttpGet]
        public HttpResponseMessage Get()
        {
            try 
            {
                return 
                    new HttpResponseMessage()
                    {
                        Content = new StringContent(""),
                        StatusCode = HttpStatusCode.OK
                    };
            }
            catch
            {
                return 
                    new HttpResponseMessage()
                    {
                        Content = new StringContent(""),
                        StatusCode = HttpStatusCode.OK
                    };
            }
        }
    }
}