import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http'
import { RouterModule, Routes } from '@angular/router'
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { UserComponent } from './components/user/user.component';

import { DataService } from './services/data.service';
import { ArticleComponent } from './components/article/article.component'

import { FilterPipe } from './filter.pipe';

const appRoutes: Routes = [
  {path: '', component: UserComponent},
  {path: 'article/:id', component: ArticleComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    ArticleComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    FormsModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
