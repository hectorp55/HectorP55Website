import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'skill-icon',
    templateUrl: './skill-icon.component.html',
    styleUrls: ['./skill-icon.component.scss'],
    standalone: false
})
export class SkillIconComponent implements OnInit {

  @Input('img-url') imgUrl: string;
  constructor() { }
  
  ngOnInit(): void {
  }

}
