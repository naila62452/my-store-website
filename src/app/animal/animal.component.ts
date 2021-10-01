import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Animals } from '../data_models/animal';
@Component({
  selector: 'app-animal',
  templateUrl: './animal.component.html',
  styleUrls: ['./animal.component.scss']
})
export class AnimalComponent implements OnInit {
  @Input() animal: Animals;
  @Output() liked: EventEmitter<Animals> = new EventEmitter;
  constructor() {
    this.animal = {
      title: '',
      id: 0,
      name: '',
      fed: true,
      description: ''
     }
   }

onClick(animal: Animals) {
  this.liked.emit(animal);
}
  ngOnInit(): void {}

}
