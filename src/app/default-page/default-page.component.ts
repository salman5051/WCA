import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-default-page',
  templateUrl: './default-page.component.html',
  styleUrls: ['./default-page.component.css']
})
export class DefaultPageComponent implements OnInit {

  public LowPerformanceCabinets : any = [];
  public HighPerformanceCabinets : any = [];
  public WatchList : any = [];

  constructor() { }

  ngOnInit() {
    this.LowPerformanceCabinets=[{
      'cabinetId':'1',
      'performance':'20',
    
    },{'cabinetId':'2',
    'performance':'40'},
    {'cabinetId':'3',
    'performance':'30'}];
    this.HighPerformanceCabinets=[{
      'cabinetId':'1',
      'performance':'60',
    
    },{'cabinetId':'2',
    'performance':'80'},
    {'cabinetId':'3',
    'performance':'90'}];
    this.WatchList=[{
      'cabinetId':'1',
      'performance':'40',
    
    },{'cabinetId':'2',
    'performance':'30'},
    {'cabinetId':'3',
    'performance':'40'}];
  }

}
