import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UppyWrapperComponent } from './uppy-wrapper/uppy-wrapper.component';

@NgModule({
  declarations: [
    AppComponent,
    UppyWrapperComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
