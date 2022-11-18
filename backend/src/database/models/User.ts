import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
class User {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column({ name: 'user_name' })
  userName: string;

  @Column()
  password: string;

  @Column({ name: 'account_id' })
  accountId?: number;
}

export default User;
