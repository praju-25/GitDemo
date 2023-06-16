import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RFormbuilderComponent } from './r-formbuilder.component';

describe('RFormbuilderComponent', () => {
  let component: RFormbuilderComponent;
  let fixture: ComponentFixture<RFormbuilderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RFormbuilderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RFormbuilderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
