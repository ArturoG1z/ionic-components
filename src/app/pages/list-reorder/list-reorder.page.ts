import { Component, OnInit, ViewChild } from '@angular/core';
import { DataService } from '../../services/data.service';
import { IonList } from '@ionic/angular';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-list-reorder',
  templateUrl: './list-reorder.page.html',
  styleUrls: ['./list-reorder.page.scss'],
})
export class ListReorderPage implements OnInit {
  @ViewChild(IonList) list: IonList;
  users: any;
  isEditable = false;
  constructor(
    private dataService: DataService
  ) { }

  ngOnInit() {
    this.dataService.getUsers().subscribe(users => {
      this.users = users;
    });
  }

  doReorder(event) {
    const itemMove = this.users.splice(event.detail.from, 1)[0];
    this.users.splice(event.detail.to, 0, itemMove);
    event.detail.complete();
  }

  listenToggle(isEditable: any) {
    this.isEditable = isEditable;
  }

}
