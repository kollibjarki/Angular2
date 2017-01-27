import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { CommentService } from '../shared/comment.service';
import { ValueService } from '../shared/value.service';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {


  constructor(
    private commentService: CommentService,
    private valueService: ValueService
  ) { }
  @Input() SubIsClosed = false;
  @Output() opened = new EventEmitter();
  @Output() closed = new EventEmitter();

  ngOnInit() {
    
  }

  toggle() {
    this.SubIsClosed = !this.SubIsClosed
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
