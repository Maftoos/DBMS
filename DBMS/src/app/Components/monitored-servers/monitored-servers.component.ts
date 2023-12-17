import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-monitored-servers',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './monitored-servers.component.html',
  styleUrl: './monitored-servers.component.css'
})
export class MonitoredServersComponent {
  //im too lazy to write objects
  getLoopCount(count: number): number[] {
    return new Array(count);
  }
}
