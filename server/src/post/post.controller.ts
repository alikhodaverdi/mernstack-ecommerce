import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreatePostDto } from './dto/createPostDto.dto';
import { PostService } from './post.service';
import { PostDocument } from './schema/post.schema';

@Controller('posts')
export class PostController {
  constructor(private postService: PostService) {}

  @Get()
  async getPosts(): Promise<PostDocument[]> {
    return this.postService.getPosts();
  }

  @Post('create')
  async createPost(@Body() createPostDto: CreatePostDto) {
    this.postService.createPost(createPostDto);
  }
}
