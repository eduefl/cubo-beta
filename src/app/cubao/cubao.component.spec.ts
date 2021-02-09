import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CubaoComponent } from './cubao.component';

describe('CubaoComponent', () => {
  let component: CubaoComponent;
  let fixture: ComponentFixture<CubaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CubaoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CubaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
