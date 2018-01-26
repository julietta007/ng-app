import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from "@angular/router";

import { PostService } from '../post.service';
import { Post } from '../post';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.scss']
})
export class PostCreateComponent implements OnInit {

  post = new Post();
  errors: Array<any> = [];
  errorMessage: string;

  constructor(
    private postService: PostService,
    private router: Router

  ) { }

  ngOnInit(): void{}

  response(response): void{
    if(response.success===false){
      this.errors = response.errors.errors;
      this.errorMessage = response.errors.message;
    }

    if(response.success===true){
      this.router.navigate(['/posts/view/', response.post._id]);
    }
  }

  onSubmit(): void {
    this.postService.createPost(this.post).subscribe(
      (response) => {
        this.response(response)}
    );
  }

}
