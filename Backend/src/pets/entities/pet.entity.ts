// pets/pet.entity.ts

import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { User } from '../../auth/entities/user.entity';

@Entity('pets')
export class Pet {
  @PrimaryGeneratedColumn('uuid')
  id: string;
  
  @Column('boolean', { default: true })
  isAvailable: boolean;

  @Column('text')
  name: string;

  @ManyToOne(() => User, user => user.pets, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'rescuerId' })
  rescuer: User;

  @Column('text')
  location: string;

  @Column('int')
  energyLevel: number;

  @Column('int')
  affectionLevel: number;

  @Column('text')
  breedSize: string;

  @Column('text')
  personalityTraits: string;

  @Column('text')
  description: string;

}
