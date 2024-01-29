import { Component } from '@angular/core';
import { Hero } from '../../interfaces/hero';
import { NgFor } from '@angular/common';
import { HEROES } from '../../mock-info/mock-heroes';
import { HeroDetailComponent } from '../hero-detail/hero-detail.component';
import { HeroService } from '../../Services/hero.service';
import { Observable, of } from 'rxjs';
import { MessageService } from '../../Services/message.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrl: './heroes.component.css',
})

export class HeroesComponent {
  heroes: Hero[] = [];

  constructor(private heroService:HeroService){}

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroes().subscribe(heroes => this.heroes = heroes)
  }

  add(name: string): void {
    name = name.trim();
    if(!name) { return; }
    this.heroService.addHero({ name } as Hero).subscribe(hero => {this.heroes.push(hero);});
  }

  delete(hero: Hero): void {
    this.heroes = this.heroes.filter(h => h !== hero);
    this.heroService.deleteHero(hero.id).subscribe();
  }
}
