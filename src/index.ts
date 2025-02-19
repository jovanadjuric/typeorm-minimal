import { AppDataSource } from './data-source';
import { Post } from './entities/post.entity';

AppDataSource.initialize().then(async () => {
  const postRepository = AppDataSource.manager.getRepository(Post)

  const post = await postRepository.save(postRepository.create({ title: "Lorem Ipsum", description: "Lorem ispum dolor sit amet" }))
}).catch(error => console.log(error));
