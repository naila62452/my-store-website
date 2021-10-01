import { Component, OnInit } from '@angular/core';
import { Animals } from '../data_models/animal';
import { AnimalServiceService } from '../services/animal-service.service'
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
recipe: string = "Lemonade"
list = [
  "lemon", "water", "sugar"
]
ing1: string = "water"
ing2: string = "lemon"
ing3: string = "sugar"

title: string = "Animals List"
animalList: Animals[] = []

  constructor(private animalService: AnimalServiceService) { }

  ngOnInit(): void {
    this.animalList = this.animalService.getAnimalList();
  }
  liked(animal: Animals) {
    alert(`I like the ${animal.name}`)
  }
}
