import { Component, OnInit } from '@angular/core';
import { Observable, Subject, debounceTime } from 'rxjs';
import { debounce, distinctUntilChanged, switchMap } from 'rxjs';
import { Hero } from '../../interfaces/hero';
import { HeroService } from '../../Services/hero.service';

@Component({
  selector: 'app-hero-search',
  templateUrl: './hero-search.component.html',
  styleUrl: './hero-search.component.css'
})
export class HeroSearchComponent implements OnInit{
  heroes$!: Observable<Hero[]>;
  private searchTerms = new Subject<string>();

  constructor(private heroService: HeroService) {}

  search(term: string): void{
    this.searchTerms.next(term);
  }

  ngOnInit(): void {
      this.heroes$ = this.searchTerms.pipe(
        debounceTime(300),
        distinctUntilChanged(),
        switchMap((term: string) => this.heroService.searchHeroes(term))
      );
  }

}
