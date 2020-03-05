import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModeToolComponent } from './mode-tool.component';

describe('ModeToolComponent', () => {
  let component: ModeToolComponent;
  let fixture: ComponentFixture<ModeToolComponent>;
∑
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ModeToolComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModeToolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
