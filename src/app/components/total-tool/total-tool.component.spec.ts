import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TotalToolComponent } from './total-tool.component';

describe('TotalToolComponent', () => {
  let component: TotalToolComponent;
  let fixture: ComponentFixture<TotalToolComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TotalToolComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TotalToolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
