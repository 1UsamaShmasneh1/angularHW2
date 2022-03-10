import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TitleComponent } from './title/title.component';
import { StoryComponent } from './story/story.component';
import { PicComponent } from './pic/pic.component';

@NgModule({
  declarations: [
    AppComponent,
    TitleComponent,
    StoryComponent,
    PicComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
