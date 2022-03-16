import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IComponent } from 'src/app/interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(
    private http: HttpClient
  ) { }

  getMenuOpts() {
    return this.http.get<IComponent[]>('assets/data/menu-opts.json');
  }

  getUsers() {
    return this.http.get('https://jsonplaceholder.typicode.com/users');
  }

  getAlbums() {
    return this.http.get<any[]>('https://jsonplaceholder.typicode.com/albums');
  }

  getHeros() {
    return this.http.get('assets/data/superheroes.json');
  }
}
