import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.page.html',
  styleUrls: ['./searchbar.page.scss'],
})
export class SearchbarPage implements OnInit {
  albums: any[];
  searchText = '';
  constructor(
    private dataService: DataService
  ) { }

  ngOnInit() {
    this.dataService.getAlbums().subscribe(albums => {
      this.albums = albums;
    });
  }

  // ionChange without debounce is not recommended for request petitions
  onSearchChange(event) {
    this.searchText = event.detail.value;
  }
}
