// alerts-home.component.ts
import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-alerts-home',
  templateUrl: './alerts-home.component.html',
  standalone: true,
  imports: [],
  styleUrls: ['./alerts-home.component.css']
})
export class AlertsHomeComponent implements OnInit {
  items: MenuItem[] = [
    {
      label: 'File',
      items: [
        {
          label: 'New',
          icon: 'pi pi-fw pi-plus',
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
      label: 'Edit',
      icon: 'pi pi-fw pi-pencil',
      items: [
        { label: 'Delete', icon: 'pi pi-fw pi-trash' },
        { label: 'Refresh', icon: 'pi pi-fw pi-refresh' }
      ]
    }
  ];

  ngOnInit() {
  }
}
