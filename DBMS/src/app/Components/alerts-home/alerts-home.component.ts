// alerts-home.component.ts
import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { AlertDatabasesComponent } from '../alert-databases/alert-databases.component';
@Component({
  selector: 'app-alerts-home',
  templateUrl: './alerts-home.component.html',
  standalone: true,
  imports: [AlertDatabasesComponent],
  styleUrls: ['./alerts-home.component.css']
})
export class AlertsHomeComponent {
  
}
