import { Component, OnInit } from '@angular/core';
import { DemodataService } from '../demodata.service';

@Component({
  selector: 'app-democomponent2',
  templateUrl: './democomponent2.component.html',
  styleUrls: ['./democomponent2.component.css']
})
export class Democomponent2Component implements OnInit {
  uName = '';
  constructor(private demoData2 : DemodataService) { }

  ngOnInit() {
    this.uName = this.demoData2.getName();
  }

}
