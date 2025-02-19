import "reflect-metadata"
import { DataSource } from "typeorm"
import { Post } from "./entities/post.entity"
import { TypeormLogger } from "./logger"
import { PostSubscriber } from "./subscribers/post.subscriber"

export const AppDataSource = new DataSource({
  type: "sqlite",
  database: ":memory:",
  synchronize: true,
  entities: [Post],
  migrations: [],
  subscribers: [PostSubscriber],
  logger: new TypeormLogger(false)
})
