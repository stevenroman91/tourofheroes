import { Component, ViewChild } from '@angular/core';
import { Hero } from './hero';
import { NgForm } from '@angular/forms';
import { HeroesComponent } from './heroes/heroes.component';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {
	title: string;
	newHeroName: string;

	@ViewChild(HeroesComponent)
	heroesComponent: HeroesComponent;

	constructor() {
		this.title = 'Mon super tour of Heroes';
	}

	validateHero(event: any, form: NgForm) {
		let hero: Hero = new Hero();
		hero.name = this.newHeroName;
		this.heroesComponent.heroes.push(hero);
		form.resetForm();
	}
}
