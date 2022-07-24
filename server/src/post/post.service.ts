import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreatePostDto } from './dto/createPostDto.dto';

import { Post, PostDocument } from './schema/post.schema';

@Injectable()
export class PostService {
  constructor(
    @InjectModel(Post.name)
    private readonly posts: Model<PostDocument>,
  ) {}
  async createPost(post: CreatePostDto) {
    const newPost = new this.posts(post);
    return await newPost.save();
  }

  async getPosts(): Promise<PostDocument[]> {
    return this.posts
      .find({
        published: true,
      })
      .sort({ createAt: -1 });
  }
}
