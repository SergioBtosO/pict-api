import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';

@Entity('users')
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ nullable: false })
  name: string;

  @Column({ nullable: false })
  last_name: string;

  @Column({ nullable: false })
  type_document: string;

  @Column({ nullable: false })
  number_document: string;

  @Column({ nullable: false })
  password: string;

  @Column({ nullable: false })
  status: string;

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

  @ManyToOne(() => User)
  @JoinColumn([{ name: 'created_by_user_id', referencedColumnName: 'id' }])
  createdByUserId?: User;

  @ManyToOne(() => User)
  @JoinColumn({ name: 'updated_by_user_id', referencedColumnName: 'id' })
  updatedByUserId?: User;
}
