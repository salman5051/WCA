import { Component, OnInit } from '@angular/core';
import { RemoteDiagnosisServiceService } from '../remote-diagnosis-service.service';
import { BsDatepickerModule } from 'node_modules/ngx-bootstrap/datepicker';
import {DatetimePopupModule} from 'ngx-bootstrap-datetime-popup';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { moment } from 'ngx-bootstrap/chronos/test/chain';
import { dayOfYearFromWeeks } from 'ngx-bootstrap/chronos/units/week-calendar-utils';


@Component({
  selector: 'app-remote-diagnosis',
  templateUrl: './remote-diagnosis.component.html',
  styleUrls: ['./remote-diagnosis.component.css']
})
export class RemoteDiagnosisComponent implements OnInit {
  form: FormGroup
  public RemoteDiagnosis: any = [];
  _object= Object;
  constructor(private formBuilder: FormBuilder, private service:RemoteDiagnosisServiceService) { }

  isDataAvailable =false;
  maxDate: Date = new Date();
  minDate: Date = new Date();  
  startDate: Date = new Date();
  
  private bsRangeValue: any = [new Date(this.startDate.setDate(-20)), new Date()];



  ngOnInit() {
    
  }
  getData(){
    this.getRemoteDiagnosisData();

    this.isDataAvailable= true;
  }

   getRemoteDiagnosisData(){
    this.RemoteDiagnosis = this.service.getRemoteDiagnosisServiceData();
  }

  
}
