import { CommentSub } from './comment-sub';

export class Comment {
    Id: number;
    ProductId: number;
    UserId: String;
    Comment : String;
    DateSubmitted: Date;
    NumberOfLikes: number;
    SubComment: CommentSub[];
}
