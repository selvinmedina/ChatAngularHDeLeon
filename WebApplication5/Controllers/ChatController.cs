using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using WebApplication5.Models.Response;
using WebApplication5.Models.ViewModels;

namespace WebApplication5.Controllers
{
    [Route("api/[controller]")]
    public class ChatController : Controller
    {
        private Models.MyDbContext db;

        public ChatController(Models.MyDbContext context)
        {
            db = context;
        }

        [HttpGet("[action]")]
        public IEnumerable<MessageViewModel> Message()
        {
            List<MessageViewModel> lst = (from d in db.Message
                                          orderby d.Id descending
                                          select new MessageViewModel
                                          {
                                              Id = d.Id,
                                              Name = d.Name,
                                              Text = d.Text
                                          }).ToList();

            return lst;
        }

        [HttpPost("[action]")]
        public MyResponse Add([FromBody] MessageViewModel model)
        {
            MyResponse oR = new MyResponse();

            try
            {
                Models.Message oMessage = new Models.Message();
                oMessage.Name = model.Name;
                oMessage.Text = model.Text;
                db.Message.Add(oMessage);
                db.SaveChanges();
                oR.Success = 1;
            }
            catch (Exception ex)
            {
                oR.Success = 0;
                oR.Message = ex.Message.ToString();
            }
            return oR;
        }
    }
}