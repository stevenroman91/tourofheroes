import { Component, OnInit, Input } from '@angular/core';
import { Hero } from '../hero';

@Component({
	selector: 'demo-heroes',
	templateUrl: './heroes.component.html',
	styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
	heroes: Array<Hero>;

	constructor() {
		this.heroes = new Array();
	}

	ngOnInit() {
		this.heroes.push(new Hero('Link'));
		this.heroes.push(new Hero('Zelda'));
		this.heroes.push(new Hero('Tingle'));
	}

	deleteHero(heroId: number) {
		let index = this.heroes.findIndex((hero) => hero.id === heroId);
		if (index >= 0) {
			this.heroes.splice(index, 1);
		}
	}

}
