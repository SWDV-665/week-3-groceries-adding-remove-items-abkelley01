import { Component } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  title = "Grocery"

  items = [
    {
      name: "Milk",
      quantity: 2
    },
    {
      name: "Bread",
      quantity: 1
    },
    {
      name: "Banana",
      quantity: 3
    },
    {
      name: "Sugar",
      quantity: 1
    },

  ];

  constructor(public toastController: ToastController, public alertController: AlertController) {}


  async removeItem(item, index) {
    console.log("removing item - ", item, index);

    const toast = await this.toastController.create({
      message: 'Removing item ' + index + '...',
      duration: 2000
    });
    toast.present();

    this.items.splice(index, 1);
  }

  addItem() {
    console.log("Add Item");
    this.showAddItemPrompt();
  }

  async showAddItemPrompt() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Add Item',
      message: 'Please enter item...',
      inputs: [
        {
          name: 'name',
          type: 'text',
          placeholder: 'Name'
        },
        {
          name: 'quantity',
          type: 'text',
          placeholder: 'Quantity'
        }
                
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, {
          text: 'Add',
          handler: item => {
            console.log('Item Added', item);
            this.items.push(item);
          }
        }
      ]
    });

    await alert.present();
  }
  
}
