﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebApplication5.Models.Response
{
    public class MyResponse
    {
        public int Success { get; set; }
        public string Message { get; set; }
        public object Data { get; set; }
    }
}
