import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Comment } from './comment';
import { MdDialog } from '@angular/material';
import { GlobalService } from './global.service';
import { ValueService } from './value.service';
import { DynamicDialogComponent } from '../dialogs/dynamic-dialog/dynamic-dialog.component';

@Injectable()
export class CommentService {

  constructor(
      private http: Http,
      private valueService: ValueService,
      private dialog: MdDialog,
      private globalService: GlobalService
  ) { }

  commentList: Comment[];
  getComments(){
    this.commentList = [] ;
    let productId = this.valueService.activeProduct.value.Id;
    let getCommentUrl = "http://localhost:56846/api/comments/getComments/"+ productId;
    this.http.get(getCommentUrl)
      .map(res => res.json())
      .subscribe((list) => {
        this.commentList = list;
      }) 
  }

  commentOnProduct(comment: string){
    if(comment != ""){
      if(this.valueService.user.access_token != null){
        let _url = "http://localhost:56846/api/comments/add";
        let body = "ProductId=" +this.valueService.activeProduct.value.Id + "&UserId=" 
                    + this.valueService.user.userName + "&Comment=" + comment; 
        let _headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
        let options = new RequestOptions({ headers: _headers });
        this.http.post(_url, body, options)
          .subscribe(data => {
            this.valueService.dialogMessage = "Thanks For Commenting";
            this.dialog.open(DynamicDialogComponent);
            this.globalService.closeDialogTimeout();
            this.getComments();
          }, error => {
            console.log(JSON.stringify(error.json()));
          });
      }else{
        this.valueService.dialogMessage  = "Please Log In to Comment!";
        this.dialog.open(DynamicDialogComponent);
      }
    }
  }

  replyToComment(Id, SubComment){
    if(SubComment != ""){
      let productId = this.valueService.activeProduct.value.Id;      
      if(this.valueService.user.access_token != null){   
        let _url = "http://localhost:56846/api/comments/addsubcomment";
        let body = "CommentId=" + Id + "&UserId=" + this.valueService.user.userName + "&Comment=" + SubComment; 
        let _headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
        let options = new RequestOptions({ headers: _headers });
        this.http.post(_url, body, options)
          .subscribe(data => {
            this.valueService.dialogMessage  = "You replied";
            this.dialog.open(DynamicDialogComponent);
            this.globalService.closeDialogTimeout(); 
            this.getComments();
          }, error => {
            console.log(JSON.stringify(error.json()));
          });
      }else{      
        this.valueService.dialogMessage  = "Please Log In to Reply!";
        this.dialog.open(DynamicDialogComponent);
      }
    }
  }

  deleteComment(Id: Number){
    let body = "";
    let deleteCommentUrl = "http://localhost:56846/api/comments/remove/"+ Id;
    let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
    this.http.post(deleteCommentUrl, body, headers)
      .subscribe(data => {
          this.valueService.dialogMessage  = "Comment Deleted!";
          this.dialog.open(DynamicDialogComponent);
          this.globalService.closeDialogTimeout();           
          this.getComments();
      }, error => {
        console.log(JSON.stringify(error.json()));
      });
  }

  deleteSubComment(Id: number){
    let body = "";
    let deleteCommentUrl = "http://localhost:56846/api/comments/removeSub/"+ Id;
    let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
    this.http.post(deleteCommentUrl, body, headers)
      .subscribe(data => {
          this.valueService.dialogMessage  = "Comment Deleted!";
          this.dialog.open(DynamicDialogComponent);
          this.globalService.closeDialogTimeout();
          this.getComments();
      }, error => {
        console.log(JSON.stringify(error.json()));
      });
  }

  likeComment(CommentId){
      if(this.valueService.user.access_token != null){
        let _url = "http://localhost:56846/api/comments/like";
        let body = "UserId=" + this.valueService.user.userName + "&CommentId=" + CommentId; 
        let _headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
        let options = new RequestOptions({ headers: _headers });
        this.http.post(_url, body, options)
          .subscribe(data => {
            this.getComments();
          }, error => {
            console.log(JSON.stringify(error.json()));
          });
      }else{
        this.valueService.dialogMessage  = "Please Log in to Like comment!";
        this.dialog.open(DynamicDialogComponent);
      }
  }
}
