export class CreatePostDto {
  title: string;

  message: string;

  creator: string;

  tags: string[];

  selectedFile: string;

  likeCount: {
    type: Number;
    defult: 0;
  };
}
