using CandidateTrackerHw.Data;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace CandidateTrackerHw.Web.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CandidateController : ControllerBase
    {
        private string _connectionString;

        public CandidateController(IConfiguration configuration)
        {
            _connectionString = configuration.GetConnectionString("ConStr");
        }

        [HttpGet("get")]
        public List<Candidate> GetCandidates()
        {
            var repo = new CandidateRepo(_connectionString);
            return repo.GetCandidates();
        }

        [HttpGet("getbyid")]
        public Candidate GetById(int id)
        {
            var repo = new CandidateRepo(_connectionString);
            return repo.GetById(id);
        }

        [HttpPost("add")]
        public void AddCandidate(Candidate candidate)
        {
            var repo = new CandidateRepo(_connectionString);
            repo.Add(candidate);
        }

        [HttpPost("update")]
        public void UpdateCandidate(Candidate candidate)
        {
            var repo = new CandidateRepo(_connectionString);
            repo.Update(candidate);
        }
    }
}
