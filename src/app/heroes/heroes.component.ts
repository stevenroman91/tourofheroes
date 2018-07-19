import { Component, OnInit, Input } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
	selector: 'demo-heroes',
	templateUrl: './heroes.component.html',
	styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
	heroes: Array<Hero>;

	constructor(private heroService: HeroService) {
		this.heroes = new Array();
	}

	ngOnInit() {
		this.heroService.heroes.subscribe((list) => this.heroes = list);
	}

	deleteHero(heroId: number) {
		let index = this.heroes.findIndex((hero) => hero.id === heroId);
		if (index >= 0) {
			this.heroes.splice(index, 1);
		}
	}

}
