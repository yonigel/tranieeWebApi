using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Logging;

namespace webApiAngularTrainee
{
    public class Program
    {
        public static void Main(string[] args)
        {
            CreateWebHostBuilder(args).Build().Run();

                // using (var db = new BloggingContext())
                //  {
                //     // db.Blogs.Add(new Blog { Url = "http://blogs.msdn.com/adonet" });
                //     var count = db.SaveChanges();
                //     Console.WriteLine("{0} records saved to database", count);

                //     Console.WriteLine();
                //     Console.WriteLine("All blogs in database:");
                //     foreach (var blog in db.Blogs)
                //     {
                //         Console.WriteLine(" - {0}", blog.Url);
                //     }
                // }
        }

        public static IWebHostBuilder CreateWebHostBuilder(string[] args) =>
            WebHost.CreateDefaultBuilder(args)
                .UseStartup<Startup>();
    }
}
