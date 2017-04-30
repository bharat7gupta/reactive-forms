import { Component, Input, OnChanges } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

import { Address, Hero, states } from './data-model';

@Component({
    selector: 'hero-detail',
    templateUrl: './hero-detail.component.html'
})
export class HeroDetailComponent implements OnChanges{
    heroForm: FormGroup;
    states = states;
    @Input() hero: Hero = new Hero();

    constructor(private fb: FormBuilder) {
        this.createForm();
        this.heroForm.setValue({
            name:    this.hero.name,
            address: (this.hero.addresses && this.hero.addresses[0]) || new Address(),
            power: '',
            sidekick: ''
        });
    }

    createForm() {
        this.heroForm = this.fb.group({ // <-- the parent FormGroup
        name: ['', Validators.required ],
        address: this.fb.group(new Address()),
        power: '',
        sidekick: ''
        });
    }

    ngOnChanges() {

        this.heroForm.reset({
            name: this.hero.name,
            address: this.hero.addresses[0] || new Address(),
            power: '',
            sidekick: ''
        });

        this.heroForm.setValue({
            name:    this.hero.name,
            address: this.hero.addresses[0] || new Address(),
            power: '',
            sidekick: ''
        });
    }
}