import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HulkDialogComponent } from './hulk-dialog.component';

describe('HulkDialogComponent', () => {
  let component: HulkDialogComponent;
  let fixture: ComponentFixture<HulkDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HulkDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HulkDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
