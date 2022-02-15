import {
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';

import { User } from './../../users/entities';
import { Project } from './../../projects/entities';
import { CostCenter } from './../../cost-centers/entities';

@Entity('time-records')
export class TimeRecord {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @CreateDateColumn({
    type: 'timestamptz',
    default: () => 'CURRENT_TIMESTAMP',
    name: 'create_at',
  })
  createAt: Date;

  @UpdateDateColumn({
    type: 'timestamptz',
    default: () => 'CURRENT_TIMESTAMP',
    name: 'update_at',
  })
  updateAt: Date;

  @Column()
  observations?: string;

  @ManyToOne(() => User)
  @JoinColumn({ name: 'user_id', referencedColumnName: 'id' })
  userId: User;

  @ManyToOne(() => Project)
  @JoinColumn({ name: 'project_id', referencedColumnName: 'id' })
  projectId: Project;

  @ManyToOne(() => CostCenter)
  @JoinColumn({ name: 'cost_center_id', referencedColumnName: 'id' })
  costCenterId: CostCenter;

  @Column({
    type: 'timestamp',
    name: 'date_start',
    nullable: false,
  })
  dateStart: Date;

  @Column({
    type: 'timestamp',
    name: 'date_end',
    nullable: false,
  })
  dateEnd: Date;

  @Column({ nullable: false })
  status: string;

  @Column()
  discount_lunch: boolean;

  @ManyToOne(() => User)
  @JoinColumn([{ name: 'created_by_user_id', referencedColumnName: 'id' }])
  createdByUserId?: User;

  @ManyToOne(() => User)
  @JoinColumn({ name: 'updated_by_user_id', referencedColumnName: 'id' })
  updatedByUserId?: User;
}
