import { Component, OnInit } from '@angular/core';
import { CommentService } from '../shared/comment.service';
import { ValueService } from '../shared/value.service';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {

  constructor(
    private commentService: CommentService,
    private valueService: ValueService
  ) { }


  ngOnInit() {
    
  }

  addComment(comment){
    this.commentService.commentOnProduct(comment.value);
    comment.value = "";
  }

  replyComment(Id: number, SubComment){
    this.commentService.replyToComment(Id, SubComment.value);
    SubComment.value = "";
  }

  deleteComment(id: number){
    this.commentService.deleteComment(id);
  }
  
  deleteSubComment(Id: number){
    this.commentService.deleteSubComment(Id);
  }

  likeComment(commentId){
    this.commentService.likeComment(commentId);
  }
  
}