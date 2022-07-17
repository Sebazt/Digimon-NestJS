import { Body, Controller, Get, Post } from "@nestjs/common";
import { DigimonService } from "./digimon.service";

@Controller('DigiCards')
export class DigimonController {
  constructor(private readonly digiService: DigimonService){}

  @Get()
  getDigimon(){
    return this.digiService.getallDigimon()
  }

  @Post()
  createDigimon(
    @Body('name') name:string,
    @Body('level') level:string,
  ){
    const digimonId = this.digiService.insertdigimon(name, level);
    return {
      id: digimonId,
    }
  }
}