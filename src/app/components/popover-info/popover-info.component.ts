import { Component, Input, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';

@Component({
  selector: 'app-popover-info',
  templateUrl: './popover-info.component.html',
  styleUrls: ['./popover-info.component.scss'],
})
export class PopoverInfoComponent implements OnInit {
  @Input() items;
  constructor(
    private popoverCtrl: PopoverController
  ) { }

  ngOnInit() {}

  onClick(item) {
    this.popoverCtrl.dismiss({ item });
  }
}
