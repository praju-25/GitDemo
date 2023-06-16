import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveProductComponent } from './reactive-product.component';

describe('ReactiveProductComponent', () => {
  let component: ReactiveProductComponent;
  let fixture: ComponentFixture<ReactiveProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReactiveProductComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReactiveProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
