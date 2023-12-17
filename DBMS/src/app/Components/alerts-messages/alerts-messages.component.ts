import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-alerts-messages',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './alerts-messages.component.html',
  styleUrl: './alerts-messages.component.css'
})
export class AlertsMessagesComponent {
  getLoopCount(count: number): number[] {
    return new Array(count);
  }
}
