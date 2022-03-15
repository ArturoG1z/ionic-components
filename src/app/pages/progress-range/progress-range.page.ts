import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress-range',
  templateUrl: './progress-range.page.html',
  styleUrls: ['./progress-range.page.scss'],
})
export class ProgressRangePage implements OnInit {
  porcent = 0;
  constructor() { }

  ngOnInit() {
  }

  public customFormatter(value: number) {
    return `${value}%`;
  }

  rangeChange(event) {
    this.porcent = event.detail.value / 100;
  }
}
