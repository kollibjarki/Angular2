import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { ProductService } from './product.service';
import { Comment } from './comment';

@Injectable()
export class CommentService {

  constructor(
      private http: Http,
      private productService: ProductService
  ) { }

  commentOnProduct(comment: string){
    if(comment != ""){
      let userId = localStorage.getItem('userName');
      let productId = this.productService.product[0].Id;
      if(userId != null){
        let _url = "http://localhost:56846/api/comments/add";
        let body = "ProductId=" + productId + "&UserId=" + userId + "&Comment=" + comment; 
        let _headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
        let options = new RequestOptions({ headers: _headers });
        this.http.post(_url, body, options)
          .subscribe(data => {
            alert('Thanks For Commenting');
            this.productService.getProduct(productId);
          }, error => {
            console.log(JSON.stringify(error.json()));
          });
      }
      if(userId == null)
      {
        alert('You must log in to comment');
          this.productService.getProduct(productId);
      }
    }
  }

  deleteComment(id: Number){
    let body = "";
    let deleteCommentUrl = "http://localhost:56846/api/comments/remove/"+ id;
    let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
    this.http.post(deleteCommentUrl, body, headers)
      .subscribe(data => {
          confirm('Comment Deleted');
          this.getComments();
      }, error => {
        console.log(JSON.stringify(error.json()));
      });
  }

  commentList: Comment[];
  getComments(){
    this.commentList = [] ;
    let productId = this.productService.product[0].Id;
    let getCommentUrl = "http://localhost:56846/api/comments/getComments/"+ productId;
    this.http.get(getCommentUrl)
      .map(res => res.json())
      .subscribe((list) => {
        this.commentList = list;
      }) 
  }

  likeComment(CommentId){
      let userId = localStorage.getItem('userName');
      if(userId != null){
        let _url = "http://localhost:56846/api/comments/like";
        let body = "UserId=" + userId + "&CommentId=" + CommentId; 
        let _headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
        let options = new RequestOptions({ headers: _headers });
        this.http.post(_url, body, options)
          .subscribe(data => {
            this.getComments();
          }, error => {
            console.log(JSON.stringify(error.json()));
          });
      }else{
        alert('You must log in to like comment');
      }
  }
}
