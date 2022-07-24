import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

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

  @Prop()
  likeCount: {
    type: Number;
    defult: 0;
  };
}

export const PostMessage = SchemaFactory.createForClass(Post);
export default PostMessage;
