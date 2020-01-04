import { customDirective } from "./custom.directive";
import { coursesComponent } from "./courses/courses.component";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { SimpleComponent } from "./simple/simple.component";
import { HeaderComponent } from "./header/header.component";
import { PengaDirective } from "./penga.directive";
import { LoginComponent } from "./login/login.component";
import { FormsModule } from "@angular/forms";
import { RegisterComponent } from "./register/register.component";
import { ReactiveFormsModule } from "@angular/forms";
import { StudentsComponent } from "./students/students.component";
import { ContactComponent } from "./contact/contact.component";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { PagenotfoundComponent } from "./pagenotfound/pagenotfound.component";

//to use RESTfull Api in angular
// import httpClientModule form @angular/common/http
import { HttpClientModule } from "@angular/common/http";
import { PlayerComponent } from "./player/player.component";
import { PostsComponent } from "./posts/posts.component";

const Router: Routes = [
  { path: "", component: HomeComponent },
  { path: "login", component: LoginComponent },
  { path: "register", component: RegisterComponent },
  { path: "findplayer", component: PlayerComponent },
  { path: "posts", component: PostsComponent },
  { path: "**", component: PagenotfoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    coursesComponent,
    SimpleComponent,
    customDirective,
    HeaderComponent,
    PengaDirective,
    LoginComponent,
    RegisterComponent,
    StudentsComponent,
    ContactComponent,
    HomeComponent,
    PagenotfoundComponent,
    PlayerComponent,
    PostsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(Router),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
