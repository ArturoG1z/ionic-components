import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.page.html',
  styleUrls: ['./checkbox.page.scss'],
})
export class CheckboxPage implements OnInit {
  public form = [
    { val: 'Pepperoni', isChecked: true, color: 'primary' },
    { val: 'Sausage', isChecked: false, color: 'success' },
    { val: 'Mushroom', isChecked: false, color: 'danger' },
  ];
  constructor() {}

  ngOnInit() {}

  onClick(item: any) {
    console.log(item);
  }
}
