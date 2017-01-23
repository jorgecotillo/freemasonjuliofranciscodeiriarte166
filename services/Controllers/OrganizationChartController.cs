using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using WebApplication.Models;
using WebApplication.Models.ManageViewModels;
using WebApplication.Services;

namespace Julio.Francisco.De.Iriarte.Controllers
{
    [ApiVersion( "1.0" )]
    [Route( "api/v{version:apiVersion}/[controller]" )]
    public class OrganizationChartController : Controller
    {
        [HttpGet]
        public IList<string> GetAll()
        {

        }
    }
}