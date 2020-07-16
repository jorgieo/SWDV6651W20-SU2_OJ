import { Component } from '@angular/core';
import { ToastController } from '@ionic/angular';

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

  constructor(public toastController: ToastController) {}

  async deleteItem(item){

      const toast = await this.toastController.create({
        message: 'Removed Item - '+item.name,
        duration: 2000
      });
      toast.present();
  };

  addItem(){

  };
}
