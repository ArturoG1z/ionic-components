import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { PopoverInfoComponent } from '../../components/popover-info/popover-info.component';

@Component({
  selector: 'app-popover',
  templateUrl: './popover.page.html',
  styleUrls: ['./popover.page.scss'],
})
export class PopoverPage implements OnInit {

  constructor(
    private popoverCtrl: PopoverController
  ) { }

  ngOnInit() {
  }

  async presentPopover(ev: any = null) {
    const popover = await this.popoverCtrl.create({
      component: PopoverInfoComponent,
      event: ev,
      translucent: true,
      componentProps: {
        items: Array(40)
      },
      alignment: 'center',
      // size: 'cover' // 'auto'
      // backdropDismiss: false,
    });
    // return await popover.present();
    await popover.present();
    //? is more recommended use the onWillDismiss than the onDidDismiss its faster
    const { data } = await popover.onWillDismiss();
    console.log('data', data);
    return data;
  }
}
