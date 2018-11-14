import { Component, OnInit } from '@angular/core';
import { DemodataService } from '../demodata.service';

@Component({
  selector: 'app-democomponent',
  templateUrl: './democomponent.component.html',
  styleUrls: ['./democomponent.component.css']

})
export class DemocomponentComponent implements OnInit {

  uname = '';

  constructor(private demoData: DemodataService) { 
    
  }

  ngOnInit() {
    this.uname = this.demoData.getName();
  }
 

}
