import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { CommentService } from '../comment.service';
import { AccountService } from '../account.service';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {

  constructor(
    private commentService: CommentService,
    private accountService: AccountService
  ) { }
  @Input() SubIsClosed = false;
  @Output() opened = new EventEmitter();
  @Output() closed = new EventEmitter();

  ngOnInit() {
    this.commentService.getComments();
  }

  toggle() {

  }

  addComment(comment){
    let com = comment.value;
    this.commentService.commentOnProduct(com);
  }

  replyComment(id: number){
    
  }

  deleteComment(id: number){
    this.commentService.deleteComment(id);
  }
  
  likeComment(commentId){
    this.commentService.likeComment(commentId);
  }

}
