import { Component, OnInit } from '@angular/core';
import { labels } from '../labels';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  constructor() { }

  public headerLabels;
  ngOnInit(): void {
    this.headerLabels = labels.contact;
  }

}
