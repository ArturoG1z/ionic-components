import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @Input() title: string;
  @Input() isBackShown: boolean;
  @Input() isAboutShown: boolean;
  @Input() isAboutDisabled = false;
  @Input() isAvatarShown: boolean;
  @Input() imagePath: string;
  @Input() isToggleShown: boolean;
  @Input() isMenuShown: boolean;
  @Output() clickToggle = new EventEmitter<boolean>();
  isEditable = false;
  constructor(
    private menuCtrl: MenuController
  ) {}

  ngOnInit() {}

  toggle() {
    this.isEditable = !this.isEditable;
    this.clickToggle.emit(this.isEditable);
  }

  // ? if there are more menus this will another option of an menu button
  // showMenu() {
  //   this.menuCtrl.open('first-menu');
  // }
}
