import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { TestComponent } from './test/test.component';
import { ComiconComponent } from './sections/comicon/comicon.component';
import { GalleryComponent } from './sections/gallery/gallery.component';
import { AboutComponent } from './sections/about/about.component';
import { FloatingAvatarComponent } from './animations/floating-avatar/floating-avatar.component';
import { HulkDialogComponent } from './dialogs/hulk-dialog/hulk-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { HulkFloatComponent } from './animations/float-animations/hulk-float/hulk-float.component';
import { SpideyFloatComponent } from './animations/float-animations/spidey-float/spidey-float.component';
import { IronManFloatComponent } from './animations/float-animations/iron-man-float/iron-man-float.component';
import { IronManComponent } from './dialogs/iron-man/iron-man.component';
import { SpiderManComponent } from './dialogs/spider-man/spider-man.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TestComponent,
    ComiconComponent,
    GalleryComponent,
    AboutComponent,
    FloatingAvatarComponent,
    HulkDialogComponent,
    HulkFloatComponent,
    SpideyFloatComponent,
    IronManFloatComponent,
    IronManComponent,
    SpiderManComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatDialogModule,
    NoopAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
