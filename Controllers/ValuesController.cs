using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;

namespace webApiAngularTrainee.Controllers
{
    

    [Route("api/[controller]")]
    [ApiController]
    public class ValuesController : ControllerBase
    {
        struct Trainee {
        String id;
        String name;
         }

        // GET api/values
        [HttpGet]
        public ActionResult<IEnumerable<string>> Get()
        {
            return new string[] { "value1", "value2" };
        }

        // GET api/values/5
        [HttpGet("{id}")]
        public ActionResult<string> Get(int id)
        {
            List<String> values = new List<String>();
            
            using (var db = new BloggingContext())
                 {
                    // db.Blogs.Add(new Blog { Url = "http://blogs.msdn.com/adonet" });
                    // var count = db.SaveChanges();
                    foreach (var blog in db.Blogs)
                    {
                        
                        values.Add(blog.Url);
                    }
                }
            return JsonConvert.SerializeObject(values.ToArray());
        }

        // POST api/values
        [HttpPost]
        public ActionResult<Blog> Post([FromBody] Blog value)
        {
            using (var db = new BloggingContext())
                 {
                    db.Blogs.Add(new Blog { Url = value.Url, BlogId=value.BlogId, Lala="lala" });
                    var count = db.SaveChanges();
                }
            return value;
        }

        // PUT api/values/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE api/values/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
            using (var db = new BloggingContext())
                 {

                    foreach (var blog in db.Blogs)
                    {
                        db.RemoveRange(blog);
                        db.SaveChanges();
                    }
                }
        }
    }
}
