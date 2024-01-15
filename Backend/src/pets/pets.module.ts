import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';

import { AuthModule } from './../auth/auth.module';

import { PetsController } from './pets.controller';
import { PetsService } from './pets.service';

import { Pet } from './entities/pet.entity';

@Module({
  controllers: [PetsController],
  providers: [PetsService],
  imports: [
    TypeOrmModule.forFeature([ Pet ]),
    AuthModule,
  ],
  exports: [
    PetsService,
    TypeOrmModule,
  ]
})
export class PetsModule {}
