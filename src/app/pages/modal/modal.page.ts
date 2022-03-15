import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { IFile } from 'src/app/interfaces/interfaces';
import { ModalInfoPage } from '../modal-info/modal-info.page';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.page.html',
  styleUrls: ['./modal.page.scss'],
})
export class ModalPage implements OnInit {
  constructor(private modalController: ModalController) {}

  ngOnInit() {}

  async presentModal() {
    const file: IFile = {
      name: 'test',
      content: 'test',
      size: 1,
      type: 'test',
    };
    const modal = await this.modalController.create({
      component: ModalInfoPage,
      componentProps: {
        file
      },
    });
    await modal.present();
    // despues de la animacion de cierre
    const resp = await modal.onDidDismiss();
    // antes de la animacion de cierre
    console.log('resp: ', resp);

    return resp;
  }
}
