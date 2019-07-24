import { Injectable } from '@angular/core';

import { HttpClient, HttpParams } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Customer } from './models/customer';
 
import { User } from './models/User';

@Injectable({
  providedIn: 'root'
})
export class RemoteDiagnosisServiceService {
	
  constructor(private http: HttpClient) { }
  getCustomers(){
	    
	  console.log('calling components api');
     return this.http.get<Customer>(`http://apiqa.winecab.com/api/RemoteManagement/GetCustomers`);
	 
	 
  }
  getCabinets(customerId:any){
	    
	console.log('calling cabinets api');
   return this.http.get<Customer>(`http://apiqa.winecab.com/api/RemoteManagement/GetCabinets/`+customerId);
   
   
}
  getRemoteDiagnosisServiceData(){
	  
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
	"Freezer":{"Status":"OK","Position":1000,"Other1":"aaa","Other2":"bbb"}}}];

	return data;
  }
}
