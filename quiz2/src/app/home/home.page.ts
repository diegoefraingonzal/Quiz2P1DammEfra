import { Component, OnInit } from '@angular/core';
import { BromasService } from '../bromas.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage implements OnInit {
  jokeCategories: string[] = [];
  randomJoke: string = '';

  constructor(private bromasService: BromasService) {}

  ngOnInit() {
    this.loadRandomJoke();
    this.loadJokeCategories();
  }

  
  loadRandomJoke() {
    this.bromasService.getRandomJoke().subscribe((joke) => {
      this.randomJoke = joke.value;
    });
  }

  
  loadJokeCategories() {
    this.bromasService.getJokeCategories().subscribe((categories) => {
      this.jokeCategories = categories;
    });
  }
}
