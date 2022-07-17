import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { DigimonService } from "./digimon.service";

@Controller('DigiCards')
export class DigimonController {
  constructor(private readonly digiService: DigimonService) {}

  @Get()
  getAllDigimons() {
    return this.digiService.getDigimons();
  }

  @Get(':digimonId')
  getDigimon(@Param('digimonId') digimonId: string) {
    return this.digiService.getDigimonById(digimonId);
  }

  @Post()
  createDigimon(
    @Body('name') name: string, 
    @Body('level') level: string) {
    const digimonId = this.digiService.insertdigimon(name, level);
    return {
      id: digimonId,
    };
  }

  @Put(':digimonId')
  updateDigimon(
    @Param('digimonId') digimonId: string,
    @Body('name') name:string,
    @Body('level') level:string) {
    return this.digiService.update(digimonId,name,level);
  }

  @Delete(':digimonId')
  deleteDigimon(
    @Param('digimonId') digimonId: string) {
    return this.digiService.deleteDigimonbyId(digimonId);
  }
}