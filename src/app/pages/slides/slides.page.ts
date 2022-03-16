import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-slides',
  templateUrl: './slides.page.html',
  styleUrls: ['./slides.page.scss'],
})
export class SlidesPage implements OnInit {

  slides: { img: string; title: string; desc: string }[] = [
    {
      img: '/assets/slides/photos.svg',
      title: 'Share photos',
      desc: 'Look and feel the same as the real thing'
    },
    {
      img: '/assets/slides/music-player-2.svg',
      title: 'Listen to music',
      desc: 'All your favourite music in one place'
    },
    {
      img: '/assets/slides/calendar.svg',
      title: 'Never forget anything',
      desc: 'Keep your plans in one place'
    },
    {
      img: '/assets/slides/placeholder-1.svg',
      title: 'Your location',
      desc: 'We always know where you are'
    }
  ];

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }

  onClick() {
    this.navCtrl.navigateBack('/');
  }

}
