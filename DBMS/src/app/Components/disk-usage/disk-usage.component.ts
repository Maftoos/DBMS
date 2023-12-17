import { Component } from '@angular/core';
import { ChartModule } from 'primeng/chart';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-disk-usage',
  standalone: true,
  imports: [ChartModule,
            CommonModule
            ],
  templateUrl: './disk-usage.component.html',
  styleUrl: './disk-usage.component.css'
})
export class DiskUsageComponent {
  data: any;
  options: any;

  constructor() {
    this.data = {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: [
        {
          label: 'Read',
          data: [65, 59, 80, 81, 56, 55, 40],
          borderColor: '#3e95cd',
          fill: false,
        },
        {
          label: 'Write',
          data: [60, 52, 75, 72, 50, 52, 31],
          borderColor: '#8571F4',
        },
      ],
    };

    this.options = {
      responsive: true,
      maintainAspectRatio: false,
      legend: {
        display: true,
      },
    };
  }
  getLoopCount(count: number): number[] {
    return new Array(count);
  }
}
