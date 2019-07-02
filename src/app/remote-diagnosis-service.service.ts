import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RemoteDiagnosisServiceService {

  constructor(private http: HttpClient) { }
  getRemoteDiagnosisServiceData(){
    var data = [{"time":1,"Data":{"Robot":{"Status":"OK","Temperature":70},
		"Gantry":{"Status":"OK","Position":1000,"Other1":"aaa","Other2":"bbb"},
		"Freezer":{"Status":"OK","Position":1000,"Other1":"aaa","Other2":"bbb"}}},
 {"time":2,"Data":{"Robot":{"Status":"OK","Temperature":68},
		"Gantry":{"Status":"Error","Position":1200,"Other1":"bbb","Other2":"ccc"},
		"Freezer":{"Status":"OK","Position":1000,"Other1":"aaa","Other2":"bbb"}}},
		{"time":2,"Data":{"Robot":{"Status":"OK","Temperature":68},
		"Gantry":{"Status":"Error","Position":1200,"Other1":"bbb","Other2":"ccc"},
		"Freezer":{"Status":"OK","Position":1000,"Other1":"aaa","Other2":"bbb"}}},		
		{"time":3,"Data":{"Robot":{"Status":"OK","Temperature":68},
		"Gantry":{"Status":"Error","Position":1200,"Other1":"bbb","Other2":"ccc"},
		"Freezer":{"Status":"OK","Position":1000,"Other1":"aaa","Other2":"bbb"}}},		
		{"time":4,"Data":{"Robot":{"Status":"OK","Temperature":68},
		"Gantry":{"Status":"Error","Position":1200,"Other1":"bbb","Other2":"ccc"},
		"Freezer":{"Status":"OK","Position":1000,"Other1":"aaa","Other2":"bbb"}}},		
		{"time":5,"Data":{"Robot":{"Status":"OK","Temperature":68},
		"Gantry":{"Status":"Error","Position":1200,"Other1":"bbb","Other2":"ccc"},
		"Freezer":{"Status":"OK","Position":1000,"Other1":"aaa","Other2":"bbb"}}},		
		{"time":6,"Data":{"Robot":{"Status":"OK","Temperature":68},
		"Gantry":{"Status":"Error","Position":1200,"Other1":"bbb","Other2":"ccc"},
		"Freezer":{"Status":"OK","Position":1000,"Other1":"aaa","Other2":"bbb"}}},		
		{"time":7,"Data":{"Robot":{"Status":"OK","Temperature":68},
		"Gantry":{"Status":"Error","Position":1200,"Other1":"bbb","Other2":"ccc"},
		"Freezer":{"Status":"OK","Position":1000,"Other1":"aaa","Other2":"bbb"}}},
		
		{"time":8,"Data":{"Robot":{"Status":"OK","Temperature":68},
		"Gantry":{"Status":"Error","Position":1200,"Other1":"bbb","Other2":"ccc"},
		"Freezer":{"Status":"OK","Position":1000,"Other1":"aaa","Other2":"bbb"}}},		
		{"time":9,"Data":{"Robot":{"Status":"OK","Temperature":68},
		"Gantry":{"Status":"Error","Position":1200,"Other1":"bbb","Other2":"ccc"},
		"Freezer":{"Status":"OK","Position":1000,"Other1":"aaa","Other2":"bbb"}}},		
		{"time":10,"Data":{"Robot":{"Status":"OK","Temperature":68},
		"Gantry":{"Status":"Error","Position":1200,"Other1":"bbb","Other2":"ccc"},
		"Freezer":{"Status":"OK","Position":1000,"Other1":"aaa","Other2":"bbb"}}},		
		{"time":11,"Data":{"Robot":{"Status":"OK","Temperature":68},
		"Gantry":{"Status":"Error","Position":1200,"Other1":"bbb","Other2":"ccc"},
		"Freezer":{"Status":"OK","Position":1000,"Other1":"aaa","Other2":"bbb"}}},		
		{"time":12,"Data":{"Robot":{"Status":"OK","Temperature":68},
		"Gantry":{"Status":"Error","Position":1200,"Other1":"bbb","Other2":"ccc"},
		"Freezer":{"Status":"OK","Position":1000,"Other1":"aaa","Other2":"bbb"}}}];
    return data;
  }
}
