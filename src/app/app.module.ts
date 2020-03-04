import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AgGridModule } from 'ag-grid-angular';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ImageFormatterComponent } from '@components/image-formatter/image-formatter.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    AgGridModule.withComponents([ImageFormatterComponent]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
