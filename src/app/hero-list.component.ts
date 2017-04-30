import { Component, OnInit } from '@angular/core';

import { Hero, heroes } from './data-model';

@Component({
    moduleId: module.id,
    selector: 'hero-list',
    templateUrl: 'hero-list.component.html'
})

export class HeroListComponent implements OnInit {
    heroes: Hero[];
    selectedHero: Hero;

    constructor() { }

    ngOnInit() { 
        this.heroes = heroes;
    }

    select(hero: Hero) {
        this.selectedHero = hero;
    }
}