import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RemoteDiagnosisServiceService {

  constructor(private http: HttpClient) { }
  getRemoteDiagnosisServiceData(){
    var data = [{"time":1,"Data":{"Robot":{"Status":"OK","Temperature":70},"Gantry":{"Status":"OK","Position":1000,"Other1":"aaa","Other2":"bbb"},"Freezer":{"Status":"OK","Position":1000,"Other1":"aaa","Other2":"bbb"}}},
    {"time":2,"Data":{"Robot":{"Status":"OK","Temperature":68},"Gantry":{"Status":"Error","Position":1200,"Other1":"bbb","Other2":"ccc"},"Freezer":{"Status":"OK","Position":1000,"Other1":"aaa","Other2":"bbb"}}}];
    return data;
  }
}
