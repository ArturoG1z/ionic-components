import { Component, OnInit } from '@angular/core';
import { IComponent } from 'src/app/interfaces/interfaces';
import { DataService } from '../../services/data.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  components: Observable<IComponent[]>;
  constructor(
    private dataService: DataService
  ) {
  }

  ngOnInit() {
    this.components = this.dataService.getMenuOpts();
  }

}
