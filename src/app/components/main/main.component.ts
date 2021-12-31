import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ApiService } from '../../services/api/api.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent implements OnInit {
  allHeroes: any[] = [];
  randomHeroes: any[] = [];
  list: number[] = [];

  constructor(private api: ApiService, private router: Router) {}

  init() {
    for (let i = 0; i < 20; i++) {
      let x = Math.floor(Math.random() * 563);
      if (this.list[i] == x) {
        x = Math.floor(Math.random() * 563);
      } else {
        this.list[i] = x;
      }
    }

    this.api
      .getAllHeroes()
      .pipe()
      .subscribe((data: any) => {
        this.allHeroes = [...data];

        for (let i = 0; i < this.list.length; i++) {
          this.randomHeroes[i] = this.allHeroes[this.list[i]];
        }
      });
  }

  Search(value: string) {
    if (value.length > 3) {
      this.randomHeroes = [];
      for (let i = 0; i < this.allHeroes.length; i++) {
        if (
          this.allHeroes[i].name.toLowerCase().indexOf(value.toLowerCase()) !=
          -1
        ) {
          this.randomHeroes.push(this.allHeroes[i]);
        }
      }
    } else {
      this.init();
    }
  }

  ngOnInit(): void {
    this.init();
  }
}
