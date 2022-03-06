import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PlaneComponent } from './plane/plane.component';
import { PointerAnimationComponent } from './pointer-animation/pointer-animation.component';

@NgModule({
  declarations: [
    AppComponent,
    PlaneComponent,
    PointerAnimationComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
