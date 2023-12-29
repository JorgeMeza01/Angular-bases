import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { v4 as uuid } from 'uuid';


@Injectable({providedIn: 'root'})
export class DbzService {

  public characters:Character[] = [
    {
      id: uuid(),
      name:'Krillin',
      power: 1000
    },{
      id: uuid(),
      name:'Goku',
      power: 9500
    },
    {
      id: uuid(),
      name:'Vegeta',
      power: 7500
    }
  ];

  addCharacter(character:Character):void{

    // const newCharacter: Character = {
    //   id: uuid(),
    //   name: character.name,
    //   power: character.power
    // };

    const newCharacter : Character = { id: uuid(), ...character };


    // console.log('Main Page');
    // console.log(character);
    // this.characters.push(character)
    this.characters.push(newCharacter)
    // this.characters.unshift(character)
  }

  // onDeleteCharacter(index:number):void{
  //   this.characters.splice(index,1);
  // }

  deleteCharacterById(id:string):void{
    this.characters = this.characters.filter(character => character.id !== id );
  }

}

