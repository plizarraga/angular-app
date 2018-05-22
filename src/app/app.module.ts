import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FlashMessagesModule } from "angular2-flash-messages";

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PostsComponent } from './components/posts/posts.component';
import { PostService } from './services/post.service';
import { PostFormComponent } from './components/post-form/post-form.component';
import { AppRoutingModule } from './/app-routing.module';
import { HomeComponent } from './components/home/home.component';
import { PostComponent } from './components/post/post.component';
import { CreatePostComponent } from './components/create-post/create-post.component';
import { UpdatePostComponent } from './components/update-post/update-post.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PostsComponent,
    PostFormComponent,
    HomeComponent,
    PostComponent,
    UpdatePostComponent,
    CreatePostComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    FlashMessagesModule.forRoot()
  ],
  providers: [PostService],
  bootstrap: [AppComponent]
})
export class AppModule { }
