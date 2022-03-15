import { Component, OnInit } from '@angular/core';
import { IComponent } from 'src/app/interfaces/interfaces';
import { Observable } from 'rxjs';
import { DataService } from './services/data.service';
import { MenuController, Platform } from '@ionic/angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {
  components: Observable<IComponent[]>;
  constructor(
    private dataService: DataService,
    private menu: MenuController,
    private platform: Platform
  ) {
  }

  ngOnInit() {
    this.platform.ready().then(() => {
      this.components = this.dataService.getMenuOpts();
    });
  }
}
