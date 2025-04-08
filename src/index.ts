import { PostgresDataSource, SqliteDataSource } from './data-source';
import { Post } from './entities/post.entity';

SqliteDataSource.initialize().then(async () => {
  const postRepository = SqliteDataSource.manager.getRepository(Post)

  const post = await postRepository.save(postRepository.create({ title: "Lorem Ipsum", description: "Lorem ispum dolor sit amet" }))
  console.log('sqlite', post)

}).catch(error => console.log(error));

PostgresDataSource.initialize().then(async () => {
  const postRepository = PostgresDataSource.manager.getRepository(Post)

  const post = await postRepository.save(postRepository.create({ title: "Lorem Ipsum", description: "Lorem ispum dolor sit amet" }))
  console.log('postgres', post)

  await postRepository.delete({})
}).catch(error => console.log(error));
