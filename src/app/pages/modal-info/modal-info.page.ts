import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { IFile } from 'src/app/interfaces/interfaces';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-modal-info',
  templateUrl: './modal-info.page.html',
  styleUrls: ['./modal-info.page.scss'],
})
export class ModalInfoPage implements OnInit {
  @Input() file: IFile;

  user = {
    email: '',
    password: '',
  };

  constructor(private modalController: ModalController) {}

  ngOnInit() {
    console.log('file: ', this.file);
  }

  exitWithoutArgs() {
    this.modalController.dismiss();
  }

  onSubmit(form: NgForm) {
    // console.log('submit');
    // console.log(this.user);
    // console.log(form);
    this.modalController.dismiss({ user: this.user });
  }
}
