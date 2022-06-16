import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComiconComponent } from './comicon.component';

describe('ComiconComponent', () => {
  let component: ComiconComponent;
  let fixture: ComponentFixture<ComiconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComiconComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComiconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
