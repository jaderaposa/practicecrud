import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { PostComponent } from './post/post.component';
import { PostAreaComponent } from './post-area/post-area.component';
import { Routes, RouterModule } from '@angular/router';
import { PostDagdagComponent } from './post-dagdag/post-dagdag.component';
import { PostBaguhonComponent } from './post-baguhon/post-baguhon.component';



const routes: Routes = [
  { path: '', redirectTo: 'post-area', pathMatch: 'full' },
  { path: 'post-baguhon', component: PostBaguhonComponent },
  { path: 'post-area', component: PostAreaComponent },
  { path: 'post-dagdag', component: PostDagdagComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PostComponent,
    PostAreaComponent,
    PostDagdagComponent,
    PostBaguhonComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
