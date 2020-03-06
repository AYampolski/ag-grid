import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { AgGridModule } from 'ag-grid-angular';
import { ImageFormatterComponent } from './components/image-formatter/image-formatter.component';
import { ModeToolComponent } from './components/mode-tool/mode-tool.component';
import { TotalToolComponent } from './components/total-tool/total-tool.component';
import { SelectedToolComponent } from './components/selected-tool/selected-tool.component';
import { SelectedCellRenderComponent } from './components/selected-cell-render/selected-cell-render.component';
import { HeaderCustomComponent } from './components/header-custom/header-custom.component';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule, AgGridModule.withComponents([
        ImageFormatterComponent,
        ModeToolComponent,
        TotalToolComponent,
        SelectedToolComponent,
        SelectedCellRenderComponent,
        HeaderCustomComponent
      ])],
      declarations: [
        AppComponent,
        ImageFormatterComponent,
        ModeToolComponent,
        TotalToolComponent,
        SelectedToolComponent,
        SelectedCellRenderComponent,
        HeaderCustomComponent
      ],
    }).compileComponents();
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;

    fixture.detectChanges();
  }));

  it('grid API is not available until  `detectChanges`', () => {
    expect(component.gridOptions.api).not.toBeTruthy();
});


});
