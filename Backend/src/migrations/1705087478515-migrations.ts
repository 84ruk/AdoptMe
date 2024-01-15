import { MigrationInterface, QueryRunner, TableColumn } from 'typeorm';

export class PetEntity1705085184601 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn('pets', new TableColumn({
        name: 'isAvailable',
        type: 'boolean',
        default: true,
    }));
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumn('pets', 'isAvailable');
  }
}
 