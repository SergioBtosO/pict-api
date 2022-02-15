import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';

import { User } from './../../users/entities';

@Entity('projects')
export class Project {
  @PrimaryGeneratedColumn('uuid')
  id: number;

  @Column({ nullable: false })
  name: string;

  @Column({ nullable: false })
  code: string;

  @Column({ nullable: false })
  estado: number;

  @CreateDateColumn({
    type: 'timestamptz',
    default: () => 'CURRENT_TIMESTAMP',
    name: 'create_at',
  })
  createAt: Date;

  @ManyToOne(() => User)
  @JoinColumn([{ name: 'user_aprover', referencedColumnName: 'id' }])
  user_aprover: User;

  @Column({ nullable: false })
  status: string;

  @UpdateDateColumn({
    type: 'timestamptz',
    default: () => 'CURRENT_TIMESTAMP',
    name: 'update_at',
  })
  updateAt: Date;

  @ManyToOne(() => User)
  @JoinColumn([{ name: 'created_by_user_id', referencedColumnName: 'id' }])
  createdByUserId: User;

  @ManyToOne(() => User)
  @JoinColumn({ name: 'updated_by_user_id', referencedColumnName: 'id' })
  updatedByUserId: User;
}
