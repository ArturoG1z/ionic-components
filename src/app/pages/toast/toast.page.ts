import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-toast',
  templateUrl: './toast.page.html',
  styleUrls: ['./toast.page.scss'],
})
export class ToastPage implements OnInit {
  constructor(private toastCtrl: ToastController) {}

  ngOnInit() {}

  async presentToast(item = 1) {
    const toast = await this.toastCtrl.create({
      message: `Index ${item} clicked
      Your settings have been saved successfully in 
      the cloud and are now available offline.`,
      position: 'middle',
      duration: 500,
      cssClass: 'toast-w-custom-width',
      mode: 'ios',
    });
    toast.present();
  }

  async presentToastWithOptions() {
    const toast = await this.toastCtrl.create({
      header: 'Toast header',
      message: 'Click to Close',
      icon: 'information-circle',
      position: 'middle',
      mode: 'ios',
      translucent: true,
      buttons: [
        {
          side: 'start',
          icon: 'star',
          handler: () => {
            console.log('Favorite clicked');
          },
        },
        {
          role: 'cancel',
          icon: 'close',
          handler: () => {
            console.log('Cancel clicked');
          },
        },
      ],
    });
    await toast.present();

    const { role } = await toast.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
  }
}
