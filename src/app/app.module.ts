import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule }   from '@angular/forms';

import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import { AppRoutingModule } from './/app-routing.module';
import { UserService } from './user.service';
import { UserViewComponent } from './user-view/user-view.component';
import { UserCreateComponent } from './user-create/user-create.component';
import { UserEditComponent } from './user-edit/user-edit.component';
import { PostComponent } from './post/post.component';
import { PostService } from './post.service';
import { PostCreateComponent } from './post-create/post-create.component';



@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    UserViewComponent,
    UserCreateComponent,
    UserEditComponent,
    PostComponent,
    PostCreateComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [UserService, PostService],
  bootstrap: [AppComponent]
})
export class AppModule { }
