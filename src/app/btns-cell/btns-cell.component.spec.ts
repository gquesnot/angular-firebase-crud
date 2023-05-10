import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnsCellComponent } from './btns-cell.component';

describe('BtnsCellComponent', () => {
  let component: BtnsCellComponent;
  let fixture: ComponentFixture<BtnsCellComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BtnsCellComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BtnsCellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
