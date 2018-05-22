import { Component, OnInit, ViewChild  } from '@angular/core';
import { FlashMessagesService } from "angular2-flash-messages";
import { Router, ActivatedRoute } from "@angular/router";

import { PostService } from "../../services/post.service";
import { Post } from "../../models/Post";

@Component({
  selector: 'app-update-post',
  templateUrl: './update-post.component.html',
  styleUrls: ['./update-post.component.css']
})
export class UpdatePostComponent implements OnInit {
  id: number;
  post: Post = {
    id: null,
    title: '',
    body: ''
  }

  @ViewChild('postForm') form: any;

  constructor(
    private postService: PostService,
    private router: Router,
    private route: ActivatedRoute,
    private flashMessage: FlashMessagesService
  ) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.postService.getPost(this.id).subscribe(post => {
      this.post = post;
    })
  }

  onSubmit({value, valid}: {value: Post, valid: boolean}) {
    if (!valid) {
      this.flashMessage.show('Please fill out the form correctly', {
        cssClass: 'alert-danger',
        timeout: 4000
      });
    } else {
      value.id = this.id;
      this.postService.updatePost(value).subscribe(post => {
        if (post) {
          this.router.navigate([`/post/${this.id}`]);
          this.flashMessage.show('Post updated', {
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
