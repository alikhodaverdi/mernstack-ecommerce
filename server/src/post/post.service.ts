import { Injectable } from '@nestjs/common';
import { Post } from './schema/post.schema';

@Injectable()
export class PostService {
  private readonly posts: Post[] = [];

  createPost(post: Post) {
    this.posts.push(post);
  }
}
