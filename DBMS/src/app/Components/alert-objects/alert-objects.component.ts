import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-alert-objects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './alert-objects.component.html',
  styleUrl: './alert-objects.component.css'
})
export class AlertObjectsComponent {
  getLoopCount(count: number): number[] {
    return new Array(count);
  }
}
