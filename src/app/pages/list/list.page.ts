import { Component, OnInit, ViewChild } from '@angular/core';
import { IonList } from '@ionic/angular';
import { Observable } from 'rxjs';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {
  @ViewChild(IonList) list: IonList;
  users: Observable<any>;
  constructor(
    private dataService: DataService
  ) { }

  ngOnInit() {
    this.users = this.dataService.getUsers();
  }

  delete(user) {
    console.log('delete user', user);
    this.list.closeSlidingItems();
  }

  share(user) {
    console.log('share user', user);
    this.list.closeSlidingItems();
  }

}
