// alerts-home.component.ts
import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { AlertDatabasesComponent } from '../alert-databases/alert-databases.component';
import { AlertsMessagesComponent } from '../alerts-messages/alerts-messages.component';
import { RouterOutlet } from '@angular/router';
import { AlertObjectsComponent } from '../alert-objects/alert-objects.component';
import { DeadlockEventComponent } from '../deadlock-event/deadlock-event.component';
@Component({
  selector: 'app-alerts-home',
  templateUrl: './alerts-home.component.html',
  standalone: true,
  imports: [AlertDatabasesComponent,
    AlertsMessagesComponent,
    RouterOutlet,
  AlertObjectsComponent,
  DeadlockEventComponent
],
  styleUrls: ['./alerts-home.component.css']
})
export class AlertsHomeComponent {
  
}
