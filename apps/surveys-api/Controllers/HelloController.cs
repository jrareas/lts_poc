using Microsoft.AspNetCore.Mvc;
using System.Text.Encodings.Web;

namespace Surveys.Api.Controllers;

public class HelloController : Controller
{
    // 
    // GET: /HelloController/
    public string Index()
    {
        return "This is my default action...";
    }
    // 
    // GET: /HelloWorld/Welcome/ 
    public string Welcome()
    {
        return "This is the Welcome action method...";
    }
}