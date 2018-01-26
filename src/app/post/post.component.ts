import { Component, OnInit } from '@angular/core';

// 1. Import the PostService
import { PostService } from '../post.service';

// 2. Import the Post Object/Schema
import { Post } from '../post';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  // 4. Create a posts property of type post
  posts: Post;

  // 5. Inject the PostsService into the constructor
  constructor( private postService: PostService) {}

  // 7. Make a call to the service on initialization
  ngOnInit() {
    this.getPosts();
  }

  // 6. Create a local wrapper for
  getPosts(): void {
    this.postService.getPosts().subscribe(
      (response) => {
        this.posts = response.posts
      }
    );
  }
}
