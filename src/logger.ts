import { Logger, QueryRunner } from "typeorm";

export class TypeormLogger implements Logger {
  private isEnabled: boolean

  constructor(isEnabled: boolean) {
    this.isEnabled = isEnabled
  }

  public logQuery(query: string, parameters?: any[], queryRunner?: QueryRunner) {
    if (!this.isEnabled) {
      return
    }
    const sql =
      query +
      (parameters && parameters.length
        ? ' -- PARAMETERS: ' + this.stringifyParams(parameters)
        : '');
    console.log(sql, this.logQuery.name, "");
  }

  logQueryError(error: string, query: string, parameters?: any[], queryRunner?: QueryRunner) {
    if (!this.isEnabled) {
      return
    }

    const sql =
      query +
      (parameters && parameters.length
        ? ' -- PARAMETERS: ' + this.stringifyParams(parameters)
        : '');
    console.error(sql, this.logQueryError.name, "", error);
  }

  logQuerySlow(time: number, query: string, parameters?: any[], queryRunner?: QueryRunner) {
    if (!this.isEnabled) {
      return
    }

    const sql =
      query +
      (parameters && parameters.length
        ? ' -- PARAMETERS: ' + this.stringifyParams(parameters)
        : '');
    console.log(sql, this.logQuerySlow.name, "", { time });
  }

  logSchemaBuild(message: string, queryRunner?: QueryRunner) {
    if (!this.isEnabled) {
      return
    }

    console.debug(message, this.logSchemaBuild.name, "");
  }

  logMigration(message: string, queryRunner?: QueryRunner) {
    if (!this.isEnabled) {
      return
    }

    console.debug(message, this.logMigration.name, "");
  }

  log(level: 'log' | 'info' | 'warn', message: any, queryRunner?: QueryRunner) {
    if (!this.isEnabled) {
      return
    }

    switch (level) {
      case 'log':
      case 'info':
        console.log(message, this.log.name, "");
        break;
      case 'warn':
        console.warn(message, this.log.name, "");
        break;
    }
  }

  protected stringifyParams(parameters: any[]) {
    try {
      return JSON.stringify(parameters);
    } catch (error: any) {
      console.error(error)
      return parameters;
    }
  }
}
