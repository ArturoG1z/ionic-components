import { Component, Input, OnInit } from '@angular/core';

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
  constructor() { }

  ngOnInit() {}

}
