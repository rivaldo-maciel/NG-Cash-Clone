import { MigrationInterface, QueryRunner, Table } from 'typeorm';

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
            type: 'timestamps',
            isGenerated: true
          }
        ]
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('transactions');
  }
}
