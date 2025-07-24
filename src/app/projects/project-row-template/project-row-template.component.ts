import { Component, OnInit, Input } from '@angular/core';
import { ProjectTemplate } from 'src/app/label-interface';

@Component({
    selector: 'app-project-row-template',
    templateUrl: './project-row-template.component.html',
    styleUrls: ['./project-row-template.component.scss'],
    standalone: false
})
export class ProjectRowTemplateComponent implements OnInit {

  @Input('project-template') projectTemplate: ProjectTemplate;
  @Input('is-flipped') isFlipped: boolean;
  constructor() { }

  ngOnInit(): void {
  }

}
