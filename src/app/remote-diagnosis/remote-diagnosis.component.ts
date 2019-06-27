import { Component, OnInit } from '@angular/core';
import { RemoteDiagnosisServiceService } from '../remote-diagnosis-service.service';

@Component({
  selector: 'app-remote-diagnosis',
  templateUrl: './remote-diagnosis.component.html',
  styleUrls: ['./remote-diagnosis.component.css']
})
export class RemoteDiagnosisComponent implements OnInit {

  public RemoteDiagnosis: any = [];
  _object= Object;
  constructor(private service:RemoteDiagnosisServiceService) { }

  ngOnInit() {
    this.getRemoteDiagnosisData();
  }

  getRemoteDiagnosisData(){
    this.RemoteDiagnosis = this.service.getRemoteDiagnosisServiceData();
  }

}
