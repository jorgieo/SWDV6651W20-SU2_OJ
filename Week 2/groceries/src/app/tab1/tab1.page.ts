import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  items = [
    {
      name:"Banana",
      qty: 6
    },
    {
      name:"Apple",
      qty: 4
    },    
    {
      name:"Milk",
      qty: 1
    },    
    {
      name:"Bread",
      qty: 1
    },    
    {
      name:"Eggs",
      qty: 18
    }
  ];

  deleteItem(){

  };
  
  addItem(){

  };
  constructor() {}

}
