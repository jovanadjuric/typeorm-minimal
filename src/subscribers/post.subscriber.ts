import { EventSubscriber, EntitySubscriberInterface, UpdateEvent } from "typeorm"
import { Post } from "../entities/post.entity"

@EventSubscriber()
export class PostSubscriber implements EntitySubscriberInterface {

  listenTo() {
    return Post
  }

  afterLoad(entity: Post) {
    console.log(`after load`, entity)
  }

  afterUpdate(event: UpdateEvent<Post>) {
    console.log(`after update`, event.entity)
  }
}
