using Microsoft.EntityFrameworkCore.Design;
using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CandidateTrackerHw.Data;

public class CandidateTrackerDataContextFactory : IDesignTimeDbContextFactory<CandidateTrackerDataContext>
{
    public CandidateTrackerDataContext CreateDbContext(string[] args)
    {
        var config = new ConfigurationBuilder()
           .SetBasePath(Path.Combine(Directory.GetCurrentDirectory(), 
           $"..{Path.DirectorySeparatorChar}CandidateTrackerHw.Web"))
           .AddJsonFile("appsettings.json")
           .AddJsonFile("appsettings.local.json", optional: true, reloadOnChange: true).Build();

        return new CandidateTrackerDataContext(config.GetConnectionString("ConStr"));
    }
}