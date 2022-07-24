import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

export type PostDocument = Post & Document;

@Schema()
export class Post {
  @Prop()
  title: string;

  @Prop()
  message: string;

  @Prop()
  creator: string;

  @Prop([String])
  tags: string[];

  @Prop()
  selectedFile: string;

  @Prop({ default: 0 })
  likeCount: number;

  @Prop({ default: 0 })
  view: number;

  @Prop()
  published: boolean;
}

export const PostSchema = SchemaFactory.createForClass(Post);
