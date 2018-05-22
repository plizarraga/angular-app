import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from '../app/components/home/home.component';
import { PostsComponent } from '../app/components/posts/posts.component';
import { PostComponent } from '../app/components/post/post.component';
import { PostFormComponent } from '../app/components/post-form/post-form.component';
import { CreatePostComponent } from '../app/components/create-post/create-post.component'
import { UpdatePostComponent } from '../app/components/update-post/update-post.component'

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'posts', component: PostsComponent },
  { path: 'post/:id', component: PostComponent },
  { path: 'post/edit/:id', component: UpdatePostComponent },
  { path: 'posts/new', component: CreatePostComponent }
];

@NgModule({
  exports: [RouterModule],
  imports: [
    RouterModule.forRoot(routes)
  ],
  declarations: []
})
export class AppRoutingModule { }
