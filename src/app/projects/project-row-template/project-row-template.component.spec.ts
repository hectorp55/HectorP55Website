import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectRowTemplateComponent } from './project-row-template.component';

describe('ProjectRowTemplateComponent', () => {
  let component: ProjectRowTemplateComponent;
  let fixture: ComponentFixture<ProjectRowTemplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectRowTemplateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectRowTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
