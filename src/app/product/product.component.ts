import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  flagVar = true;
  themVar = 'admin';
  product =[
    {pId:101,pName:"Keyboard",pPrice:1000},
    {pId:102,pName:"Mouse",pPrice:100},
    {pId:103,pName:"CPU",pPrice:5000},
    {pId:104,pName:"LAN",pPrice:10}
  ]
  
  toggleDiv()
  {
    this.flagVar = !this.flagVar;
    if (this.themVar === 'admin'){
      this.themVar = 'user';
    }
    else{
      this.themVar ='admin';
    }
    

  }
}
