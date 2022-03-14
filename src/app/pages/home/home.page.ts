import { Component, OnInit } from '@angular/core';
interface IComponent {
  icon: string;
  name: string;
  redirectTo: string;
}
@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  components: IComponent[] = [
    {
      icon: 'american-football',
      name: 'Action Sheet',
      redirectTo: '/action-sheet',
    },
    {
      icon: 'alert-circle-outline',
      name: 'Alert',
      redirectTo: '/alert',
    },
    {
      icon: 'document',
      name: 'File text reader',
      redirectTo: '/txt-file-open',
    },
  ];
  constructor(
  ) {
  }

  ngOnInit() {}

}
