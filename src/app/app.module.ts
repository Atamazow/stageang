import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './res/view/header/header.component';
import { ContentComponent } from './first-page/res/view/content/content.component';
import { CenterComponent } from './first-page/res/view/center/center.component';
import { PodcenterComponent } from './first-page/res/view/podcenter/podcenter.component';
import { BlackblokComponent } from './first-page/res/view/blackblok/blackblok.component';
import { FootherComponent } from './res/view/foother/foother.component';
import { FirstPageComponent } from './first-page/first-page.component';
import { SecondPageComponent } from './second-page/second-page.component';
import { AppRoutingModule } from './app-routing.module';
import { ContentSecondComponent } from './second-page/res/view/content-second/content-second.component';
import { BlackSecondComponent } from './second-page/res/view/black-second/black-second.component';
import { StatySecondComponent } from './second-page/res/view/staty-second/staty-second.component';
import { ErikStoreComponent } from './second-page/res/view/erik-store/erik-store.component';
import { BlackblokSecondComponent } from './second-page/res/view/blackblok-second/blackblok-second.component';
import { NewSinglePostComponent } from './first-page/res/view/content/res/view/new-single-post/new-single-post.component';
import { NizublockComponent } from './first-page/res/view/nizublock/nizublock.component';
import { CenterPageComponent } from './first-page/res/view/center/res/view/center-page/center-page.component';
import { NizublockPageComponent } from './first-page/res/view/nizublock/res/view/nizublock-page/nizublock-page.component';
import { PodcentrPageComponent } from './first-page/res/view/podcenter/res/view/podcentr-page/podcentr-page.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContentComponent,
    CenterComponent,
    PodcenterComponent,
    BlackblokComponent,
    FootherComponent,
    FirstPageComponent,
    SecondPageComponent,
    ContentSecondComponent,
    BlackSecondComponent,
    StatySecondComponent,
    ErikStoreComponent,
    BlackblokSecondComponent,
    NewSinglePostComponent,
    NizublockComponent,
    CenterPageComponent,
    NizublockPageComponent,
    PodcentrPageComponent,


  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
