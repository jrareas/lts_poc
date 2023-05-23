using Surveys.Api.Controllers;

var builder = WebApplication.CreateBuilder(args);
builder.Services.AddControllersWithViews();
var app = builder.Build();

var services = builder.Services;
services.AddKeycloakAuthentication(authenticationOptions);

app.MapGet("/", () => "Hello World!");
app.UseRouting();
// app.MapControllerRoute(name: "hello", pattern: "{controller=Hello}/{action=Index}");

app.MapControllerRoute(
    name: "hello",
    pattern: "{controller=Hello}/{action=Index}");


app.Run();
