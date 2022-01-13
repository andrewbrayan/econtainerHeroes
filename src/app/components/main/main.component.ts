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
  renderHeroes: any[] = [];
  list: number[] = [];
  items: boolean = false;
  load: boolean = true;
  void: boolean = false;

  constructor(private api: ApiService, private router: Router) {}

  init() {
    this.api
      .getAllHeroes()
      .pipe()
      .subscribe((data: any) => {
        this.allHeroes = [...data];
        this.random();
        this.items = true;
        this.load = false;
      });
  }

  random() {
    for (let i = 0; i < 20; ) {
      let randomNumber = Math.floor(Math.random() * this.allHeroes.length);
      if (this.check(randomNumber) == false) {
        this.list.push(randomNumber);
        this.renderHeroes.push(this.allHeroes[randomNumber]);
        i++;
      }
    }
  }

  check(Num: number) {
    let rept = false;
    for (let x = 0; x < this.list.length; x++) {
      if (this.list[x] == Num) {
        rept = true;
      }
    }
    return rept;
  }

  Search(value: string) {
    if (value.length > 3) {
      this.void = false;
      this.renderHeroes = [];
      for (let i = 0; i < this.allHeroes.length; i++) {
        if (
          this.allHeroes[i].name.toLowerCase().indexOf(value.toLowerCase()) !=
          -1
        ) {
          this.renderHeroes.push(this.allHeroes[i]);
        }
      }
    } else if (value.length == 0) {
      this.random();
      this.void = false;
    }
    if (this.renderHeroes.length == 0) {
      this.void = true;
    }
  }

  ngOnInit(): void {
    this.init();
  }
}
