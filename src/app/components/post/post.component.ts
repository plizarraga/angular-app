import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";
import { FlashMessagesService } from "angular2-flash-messages";

import { PostService } from "../../services/post.service";
import { Post } from "../../models/Post";

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  post: Post = {
    id: null,
    title: '',
    body: ''
  }

  constructor(
    private postService: PostService,
    private router: Router,
    private route: ActivatedRoute,
    private flashMessage: FlashMessagesService
  ) { }

  ngOnInit() {
    this.postService.getPost(this.route.snapshot.params['id']).subscribe(post => {
      this.post = post;
    })
  }

  onDelete() {
    if (confirm('Are you sure?')) {
      this.postService.deletePost(this.route.snapshot.params['id']).subscribe(post => {
        this.flashMessage.show('Post deleted', {
          cssClass: 'alert-success',
          timeout: 4000
        });
        this.router.navigate(['/posts']);
      })
    }
  }

}
