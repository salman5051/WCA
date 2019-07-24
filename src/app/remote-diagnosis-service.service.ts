import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RemoteDiagnosisServiceService {
	
  constructor(private http: HttpClient) { }
  getRemoteDiagnosisServiceData(fromdt: Date, todt: Date){
	  
    var data = [{"time":"07/03/2019, 11:49:36 AM","Data":{"Robot":{"Status":"OK","Temperature":70},
	"Gantry":{"Status":"OK","Position":1000,"Other1":"aaa","Other2":"bbb"},
	"Freezer":{"Status":"OK","Position":1000,"Other1":"aaa","Other2":"bbb"}}},
{"time":"07/03/2019, 11:49:36 AM","Data":{"Robot":{"Status":"OK","Temperature":68},
	"Gantry":{"Status":"Error","Position":1200,"Other1":"bbb","Other2":"ccc"},
	"Freezer":{"Status":"OK","Position":1000,"Other1":"aaa","Other2":"bbb"}}},
	{"time":"07/03/2019, 11:49:36 AM","Data":{"Robot":{"Status":"OK","Temperature":68},
	"Gantry":{"Status":"Error","Position":1200,"Other1":"bbb","Other2":"ccc"},
	"Freezer":{"Status":"OK","Position":1000,"Other1":"aaa","Other2":"bbb"}}},		
	{"time":"07/03/2019, 11:49:36 AM","Data":{"Robot":{"Status":"OK","Temperature":68},
	"Gantry":{"Status":"Error","Position":1200,"Other1":"bbb","Other2":"ccc"},
	"Freezer":{"Status":"OK","Position":1000,"Other1":"aaa","Other2":"bbb"}}},		
	{"time":"07/03/2019, 11:49:36 AM","Data":{"Robot":{"Status":"OK","Temperature":68},
	"Gantry":{"Status":"Error","Position":1200,"Other1":"bbb","Other2":"ccc"},
	"Freezer":{"Status":"OK","Position":1000,"Other1":"aaa","Other2":"bbb"}}},		
	{"time":"07/03/2019, 11:49:36 AM","Data":{"Robot":{"Status":"OK","Temperature":68},
	"Gantry":{"Status":"Error","Position":1200,"Other1":"bbb","Other2":"ccc"},
	"Freezer":{"Status":"OK","Position":1000,"Other1":"aaa","Other2":"bbb"}}},		
	{"time":"07/03/2019, 11:49:36 AM","Data":{"Robot":{"Status":"OK","Temperature":68},
	"Gantry":{"Status":"Error","Position":1200,"Other1":"bbb","Other2":"ccc"},
	"Freezer":{"Status":"OK","Position":1000,"Other1":"aaa","Other2":"bbb"}}},		
	{"time":"07/03/2019, 11:49:36 AM","Data":{"Robot":{"Status":"OK","Temperature":68},
	"Gantry":{"Status":"Error","Position":1200,"Other1":"bbb","Other2":"ccc"},
	"Freezer":{"Status":"OK","Position":1000,"Other1":"aaa","Other2":"bbb"}}},
	
	{"time":"07/03/2019, 11:49:36 AM","Data":{"Robot":{"Status":"OK","Temperature":68},
	"Gantry":{"Status":"Error","Position":1200,"Other1":"bbb","Other2":"ccc"},
	"Freezer":{"Status":"OK","Position":1000,"Other1":"aaa","Other2":"bbb"}}},		
	{"time":"07/15/2019, 11:49:36 AM","Data":{"Robot":{"Status":"OK","Temperature":68},
	"Gantry":{"Status":"Error","Position":1200,"Other1":"bbb","Other2":"ccc"},
	"Freezer":{"Status":"OK","Position":1000,"Other1":"aaa","Other2":"bbb"}}},		
	{"time":"07/15/2019, 11:49:36 AM","Data":{"Robot":{"Status":"OK","Temperature":68},
	"Gantry":{"Status":"Error","Position":1200,"Other1":"bbb","Other2":"ccc"},
	"Freezer":{"Status":"OK","Position":1000,"Other1":"aaa","Other2":"bbb"}}},		
	{"time":"07/15/2019, 11:49:36 AM","Data":{"Robot":{"Status":"OK","Temperature":68},
	"Gantry":{"Status":"Error","Position":1200,"Other1":"bbb","Other2":"ccc"},
	"Freezer":{"Status":"OK","Position":1000,"Other1":"aaa","Other2":"bbb"}}},		
	{"time":"07/15/2019, 11:49:36 AM","Data":{"Robot":{"Status":"OK","Temperature":68},
	"Gantry":{"Status":"Error","Position":1200,"Other1":"bbb","Other2":"ccc"},
	"Freezer":{"Status":"OK","Position":1000,"Other1":"aaa","Other2":"bbb"}}}];

	var filteredData=data.filter(c=>new Date(c.time)>=fromdt && new Date(c.time)<=todt);
	console.log(filteredData);
    return filteredData;
  } 
}
