import { Injectable } from "@nestjs/common";
import { Digimon } from "./digimon.model";
import {v4 as uuidv4} from 'uuid'; // librería para generar un id random

@Injectable()
export class DigimonService{
  private digimons: Digimon[] = [];

  insertdigimon(name:string, level:string){
    const id = uuidv4()
    console.log(id);
    const newDigimon = new Digimon(id,name,level);
    this.digimons.push(newDigimon);
    return newDigimon;
  }

  getDigimons(){
    return [...this.digimons];
  }

  getDigimonById(id:string){
    return this.digimons.find((digi)=> digi.id === id)
  }


}