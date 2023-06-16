import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OwnModelTemplateComponent } from './own-model-template.component';

describe('OwnModelTemplateComponent', () => {
  let component: OwnModelTemplateComponent;
  let fixture: ComponentFixture<OwnModelTemplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OwnModelTemplateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OwnModelTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
