import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Observable } from 'rxjs';
import { PipesModule } from '../../pipes/pipes.module';


@Component({
  selector: 'app-segment',
  templateUrl: './segment.page.html',
  styleUrls: ['./segment.page.scss'],
})
export class SegmentPage implements OnInit {
  superHeroes: Observable<any>;
  publisher = '';
  constructor(
    private dataService: DataService
  ) { }

  ngOnInit() {
    this.superHeroes = this.dataService.getHeros();
  }

  segmentChanged(ev: any) {
  }

  segmentHeroChanged(ev: any) {
    this.publisher = ev.detail.value === 'all' ? '' : ev.detail.value;
  }
}
