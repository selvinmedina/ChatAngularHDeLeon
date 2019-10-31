﻿using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebApplication5.Models
{
    public class MyDbContext : DbContext
    {
        public MyDbContext(DbContextOptions<MyDbContext> options) : base(options)
        {

        }

        public DbSet<Message> Message { get; set; }
    }
        public class Message
        {
            public int Id { get; set; }
            public string Name { get; set; }
            public string Text { get; set; }
        }
}
