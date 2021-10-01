import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AnimalServiceService {

  constructor() { }
  getAnimalList() {
    return [
      { 
      title: 'I am Panda',
      id: 1,
      name: 'Panda',
      fed: true,
      description: 'Hello my name is pand and i am very loving'
    },
    { 
      title: 'I am Elephant',
      id: 2,
      name: 'Elephant',
      fed: true,
      description: 'Hello my name is pand and i am very loving'
    },
    {
      title: 'I am Lion',
      id: 3,
      name: 'Lion',
      fed: false,
      description: 'Hello my name is pand and i am very loving'
    }
  ]
  }
}
