import { Logger } from '@nestjs/common';
import { readFileSync, readdirSync } from 'fs';
import { join } from 'path';
import { DataSource } from 'typeorm/data-source';

export class DatabaseReady {
  private readonly SQL_INIT_DATABASE = 'init-db.sql';
  private readonly logger = new Logger(DatabaseReady.name);
  constructor(private dataSource: DataSource) {}

  async populate() {
    const queryRunner = this.dataSource.createQueryRunner();
    await queryRunner.connect();
    try {
      await queryRunner.startTransaction();
      this.logger.verbose('Start populating the database');
      const populateFile = readdirSync(join(__dirname));
      if (populateFile.includes(this.SQL_INIT_DATABASE)) {
        const sql = readFileSync(
          `${join(`${__dirname}/${this.SQL_INIT_DATABASE}`)}`,
          'utf8',
        );
        await queryRunner.query(sql);
        await queryRunner.commitTransaction();
        this.logger.verbose('Database populate successfully');
      }
    } catch (err) {
      this.logger.error(`Error while migrating the database : ${err}`);
      await queryRunner.rollbackTransaction();
    } finally {
      await queryRunner.release();
    }
  }
}
