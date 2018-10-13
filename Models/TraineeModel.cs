using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;

namespace webApiAngularTrainee
{
    public class TraineeContext : DbContext
    {
        public DbSet<Trainee> Trainees { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlite("Data Source=trainees.db");
        }
    }

    public class Trainee
    {
        public int ID { get; set; }
    }

}