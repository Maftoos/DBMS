import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-alert-databases',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './alert-databases.component.html',
  styleUrl: './alert-databases.component.css'
})
export class AlertDatabasesComponent {
  getLoopCount(count: number): number[] {
    return new Array(count);
  }
}
