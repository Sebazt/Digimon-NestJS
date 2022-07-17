import { Injectable } from "@nestjs/common";
import { Digimon } from "./digimon.model";
import {v4 as uuidv4} from 'uuid'; // librería para generar un id random

@Injectable()
export class DigimonService {
  private digimons: Digimon[] = [];

  insertdigimon(name: string, level: string) {
    const id = uuidv4();
    console.log(id);
    const newDigimon = new Digimon(id, name, level);
    this.digimons.push(newDigimon);
    return newDigimon;
  }

  getDigimons() {
    return [...this.digimons];
  }

  getDigimonById(id: string) {
    return this.digimons.find((digi) => digi.id === id);
  }

  update(id: string, name: string, level: string) {
    const [targetDigimon, index] = this.getDigiById(id);
    const newD = { ...targetDigimon, name, level };
    const newDigi = new Digimon(id, newD.name, newD.level);
    this.digimons[index] = newDigi;
    return newDigi;
  }

  deleteDigimonbyId(id: string) {
    const [, index] = this.getDigiById(id);
    this.digimons.splice(index, 1)
    return this.digimons
  }

  private getDigiById(id: string): [Digimon, number] {
    const index = this.digimons.findIndex((x) => x.id === id);
    return [this.digimons[index], index];
  }
}