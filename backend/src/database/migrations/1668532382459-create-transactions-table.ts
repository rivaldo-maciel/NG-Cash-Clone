import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey
} from 'typeorm';

export class createTransactionsTable1668532382459
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'transactions',
        columns: [
          {
            name: 'id',
            type: 'int',
            isPrimary: true,
            isGenerated: true,
            isNullable: false
          },
          {
            name: 'debited_account_id',
            type: 'int',
            isNullable: false
          },
          {
            name: 'credited_account_id',
            type: 'int',
            isNullable: false
          },
          {
            name: 'value',
            type: 'decimal',
            isNullable: false
          },
          {
            name: 'created_at',
            type: 'timestamp',
          }
        ]
      })
    );

    await queryRunner.createForeignKey(
      'transactions',
      new TableForeignKey({
        columnNames: ['debited_account_id'],
        referencedTableName: 'accounts',
        referencedColumnNames: ['id']
      })
    );

    await queryRunner.createForeignKey(
      'transactions',
      new TableForeignKey({
        columnNames: ['credited_account_id'],
        referencedTableName: 'accounts',
        referencedColumnNames: ['id'],
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('transactions');
  }
}
