import { DigimonController } from "./digimon.controller";
import { Module } from "@nestjs/common";
import { DigimonService } from "./digimon.service";

@Module({
  controllers:[DigimonController],
  providers:[DigimonService],
})

export class DigimonModule{}