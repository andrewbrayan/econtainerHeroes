import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  url: string = 'https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api';
  constructor(private http: HttpClient) {}

  getAllHeroes() {
    let dir = `${this.url}/all.json`;
    return this.http.get(dir);
  }

  getHero(id: string) {
    let dir = `${this.url}/id/${id}.json`;
    return this.http.get(dir);
  }
}
