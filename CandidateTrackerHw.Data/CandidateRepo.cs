using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CandidateTrackerHw.Data
{
    public class CandidateRepo
    {
        private readonly string _connectionString;

        public CandidateRepo(string connectionString)
        {
            _connectionString = connectionString;
        }

        public List<Candidate> GetCandidates()
        {
            var ctx = new CandidateTrackerDataContext(_connectionString);
            return ctx.Candidates.ToList();
        }

        public void Add(Candidate candidate)
        {
            var ctx = new CandidateTrackerDataContext(_connectionString);
            ctx.Candidates.Add(candidate);
            ctx.SaveChanges();
        }
        public void Update(Candidate candidate)
        {
            var ctx = new CandidateTrackerDataContext(_connectionString);
            ctx.Update(candidate);
            ctx.SaveChanges();
        }

        public Candidate GetById(int id)
        {
            var ctx = new CandidateTrackerDataContext(_connectionString);
            return ctx.Candidates.FirstOrDefault(c => c.Id == id);
        }
    }
}
