import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'; 
import { ApiService } from '../../services/api/api.service';
@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {
  heroData: any = {}


  constructor(private activatedRoute: ActivatedRoute, private api: ApiService) { 
    activatedRoute.params.subscribe( param => {
      this.api
      .getHero(param['id'])
      .pipe()
      .subscribe((data: any) => {
        this.heroData = data        
      });
    })
  }

  ngOnInit(): void {
  }

}
