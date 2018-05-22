import { Component, OnInit, ViewChild } from '@angular/core';
import { FlashMessagesService } from "angular2-flash-messages";
import { Router } from "@angular/router";

import { PostService } from "../../services/post.service";
import { Post } from "../../models/Post";

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css']
})
export class PostFormComponent implements OnInit {

  post: Post = {
    id: null,
    title: '',
    body: ''
  }

  @ViewChild('postForm') form: any;

  constructor(
    private postService: PostService,
    private router: Router,
    private flashMessage: FlashMessagesService
  ) { }

  ngOnInit() {
  }

  onSubmit({value, valid}: {value: Post, valid: boolean}) {
    if (!valid) {
      this.flashMessage.show('Please fill out the form correctly', {
        cssClass: 'alert-danger',
        timeout: 4000
      });
    } else {
      this.postService.createPost(value).subscribe(post => {
        if (post) {
          this.router.navigate(['/posts']);
          this.flashMessage.show('New post added', {
            cssClass: 'alert-success',
            timeout: 4000
          });
        } else {
          this.flashMessage.show('Somethings was wrong.', {
            cssClass: 'alert-danger',
            timeout: 4000
          });
        }
      });
    }
  }

}
