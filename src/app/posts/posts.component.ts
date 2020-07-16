import { Component, OnInit } from '@angular/core';
import { PostsService } from '../posts.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss'],
})
export class PostsComponent implements OnInit {

  post: any = []
  postDetail: any
  comment: any = []
  detailStatus: boolean = false;

  constructor(private postService: PostsService) { }

  ngOnInit(): void {
    this.postService.getAllPosts().subscribe(posts =>{
      this.post = posts
    })
  }

  selectNo(data) {
    this.postService.getPostDetail(data.id).subscribe(postData =>{  
      setTimeout(_ =>{
        this.postDetail = postData
      }, 5000)
      
      console.log("data ---->", this.postDetail );
    })
    this.postService.getComment(data.id).subscribe(commentData =>{      
      this.comment = commentData
      console.log("data ---->", this.comment);
    })
    
    this.detailStatus = true
  }
  

}
