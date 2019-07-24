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
  public Customers: any = [];
  public Cabinets: any =[];
  _object= Object;
  
  constructor(private formBuilder: FormBuilder, private service:RemoteDiagnosisServiceService) { }

  isDataAvailable =false;
  maxDate: Date = new Date();
  minDate: Date = new Date();
  startDate: Date = new Date();
  dateStart: Date;
  dateEnd: Date;
  
  private bsRangeValue: any = [new Date(this.startDate.setDate(-20)), new Date()];

  data: Date;
  components: any=[];
  selectedComponents: any=[];
  ngOnInit() {
    this.service.getCustomers().subscribe((data)=>{
      this.Customers=data;
       
    });
    
  }
  onCustomerSelect(value:any){
    this.service.getCabinets(value).subscribe((data)=>{
      this.Cabinets=data;
       
    });
  }
  getData(value: Date){
   
    this.data= value;
    this.dateStart = this.data[1];
    console.log(this.dateStart)
    console.log(this.data);
    this.getRemoteDiagnosisData(); 
    this.isDataAvailable= true;
  }
  updateGridView(event){
   if(event.target.checked){
     console.log('checked');
     if(this.selectedComponents.indexOf(event.target.name)<0){
       this.selectedComponents.push(event.target.name);
     } 
   }else{
    console.log('not checked');
    if(this.selectedComponents.indexOf(event.target.name)>-1){
      this.selectedComponents.splice(this.selectedComponents.indexOf(event.target.name),1);
    } 
   }
   console.log(this.selectedComponents);
  }
   getRemoteDiagnosisData(){
  
    this.RemoteDiagnosis = this.service.getRemoteDiagnosisServiceData();
    for(var i=0;i<this._object.keys(this.RemoteDiagnosis[0].Data).length;i++){
      this.components.push(this._object.keys(this.RemoteDiagnosis[0].Data)[i]);
      this.selectedComponents.push(this._object.keys(this.RemoteDiagnosis[0].Data)[i]);
    }
    console.log(this.RemoteDiagnosis);
 
  }

  
}
