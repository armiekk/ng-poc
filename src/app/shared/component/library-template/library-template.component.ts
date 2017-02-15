import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { MenuItem } from 'primeng/primeng';

@Component({
  selector: 'app-library-template',
  templateUrl: './library-template.component.html',
  styleUrls: ['./library-template.component.css']
})
export class LibraryTemplateComponent implements OnInit, OnChanges {

  @Input() mode: string;

  private menuItem: MenuItem[];
  private breadCrumb: MenuItem[];

  constructor() { }

  ngOnInit() {
    this.menuItem = [
      {
        label: 'ตัวอย่างโปรแกรม',
        icon: 'fa-star',
        items: [{
          label: 'New',
          icon: 'fa-plus',
          items: [
            { label: 'Project' },
            { label: 'Other' },
          ]
        },
        { label: 'Open' },
        { label: 'Quit' }
        ]
      },
      {
        label: 'TV',
        icon: 'fa-check',
        items: [
          { label: 'Undo', icon: 'fa-mail-forward' },
          { label: 'Redo', icon: 'fa-mail-reply' }
        ]
      },
      {
        label: 'Sports'
      },
      {
        label: 'Entertainment'
      },
      {
        label: 'Tech'
      },
      {
        label: 'Logout',
        icon: 'fa-times'
      }
    ];

    this.breadCrumb = [];
    this.breadCrumb.push({ label: this.mode });
  }

  ngOnChanges(changes: SimpleChanges) {
    this.breadCrumb = [];
    changes['mode'] ? this.breadCrumb.push({ label: changes['mode'].currentValue }) : null;
  }

}
