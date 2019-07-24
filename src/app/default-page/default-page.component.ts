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
      'cabinetId':'4',
      'performance':'100',
    
    },{'cabinetId':'5',
    'performance':'98'},
    {'cabinetId':'6',
    'performance':'95'}];
    this.WatchList=[{
      'cabinetId':'2',
      'performance':'40',
    
    },{'cabinetId':'3',
    'performance':'30'},
    {'cabinetId':'9',
    'performance':'40'}];
  }

}
