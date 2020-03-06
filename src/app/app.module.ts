import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AgGridModule } from 'ag-grid-angular';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ImageFormatterComponent } from '@components/image-formatter/image-formatter.component';
import { ModeToolComponent } from '@components/mode-tool/mode-tool.component';
import { TotalToolComponent } from '@components/total-tool/total-tool.component';
import { SelectedToolComponent } from './components/selected-tool/selected-tool.component';
import { SelectedCellRenderComponent } from '@components/selected-cell-render/selected-cell-render.component';
import { HeaderCustomComponent } from '@components/header-custom/header-custom.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AgGridModule.withComponents([
      ImageFormatterComponent,
      ModeToolComponent,
      TotalToolComponent,
      SelectedToolComponent,
      SelectedCellRenderComponent,
      HeaderCustomComponent
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
