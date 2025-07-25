import { Component, OnInit, Input } from '@angular/core';
import { ExperienceTemplate } from 'src/app/label-interface';

@Component({
    selector: 'app-experience-row-template',
    templateUrl: './experience-row-template.component.html',
    styleUrls: ['./experience-row-template.component.scss'],
    standalone: false,
})
export class ExperienceRowTemplateComponent implements OnInit {

  @Input('experience-template') experienceTemplate: ExperienceTemplate;
  constructor() { }

  ngOnInit(): void {
  }

}
