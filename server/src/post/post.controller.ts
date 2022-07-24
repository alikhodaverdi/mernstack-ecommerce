import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreatePostDto } from './dto/createPostDto.dto';
import { PostService } from './post.service';

@Controller('post')
export class PostController {
  constructor(private postService: PostService) {}

  @Get()
  find(): string {
    return 'Post test';
  }

  @Post('create')
  async createPost(@Body() createPostDto: CreatePostDto) {
    this.postService.createPost(createPostDto);
  }
}
