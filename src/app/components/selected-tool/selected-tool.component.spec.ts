import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectedToolComponent } from './selected-tool.component';

describe('SelectedToolComponent', () => {
  let component: SelectedToolComponent;
  let fixture: ComponentFixture<SelectedToolComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SelectedToolComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectedToolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
