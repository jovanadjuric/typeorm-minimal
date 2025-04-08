import 'dotenv/config'
import "reflect-metadata"
import { DataSource } from "typeorm"
import { TypeormLogger } from "./logger"

export const SqliteDataSource = new DataSource({
  type: "sqlite",
  database: ":memory:",
  synchronize: true,
  entities: [__dirname + '/entities/*.entity{.ts,.js}'],
  migrations: [__dirname + '/migrations/*{.ts,.js}'],
  subscribers: [__dirname + '/subscribers/*.subscriber{.ts,.js}'],
  logger: new TypeormLogger(false)
})

export const PostgresDataSource = new DataSource({
  type: 'postgres',
  host: process.env.PG_HOST,
  port: +process.env.PG_PORT,
  username: process.env.PG_USERNAME,
  password: process.env.PG_PASSWORD,
  database: process.env.PG_DATABASE,
  entities: [__dirname + '/entities/*.entity{.ts,.js}'],
  migrations: [__dirname + '/migrations/*{.ts,.js}'],
  subscribers: [__dirname + '/subscribers/*.subscriber{.ts,.js}'],
  synchronize: true,
  maxQueryExecutionTime: 3000,
  logger: new TypeormLogger(false)
})

