import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExperienceRowTemplateComponent } from './experience-row-template.component';

describe('ExperienceRowTemplateComponent', () => {
  let component: ExperienceRowTemplateComponent;
  let fixture: ComponentFixture<ExperienceRowTemplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExperienceRowTemplateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExperienceRowTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
