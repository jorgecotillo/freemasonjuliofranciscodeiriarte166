using Microsoft.AspNetCore.Mvc;

namespace Julio.Francisco.De.Iriarte.IdentityServer.Controllers
{
    public class HomeController : Controller
    {
        public IActionResult Error(string errorId)
        {
            return View();
        }
    }
}