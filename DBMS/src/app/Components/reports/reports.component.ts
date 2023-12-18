import { Component } from '@angular/core';
import { ChartModule } from 'primeng/chart';
@Component({
  selector: 'app-reports',
  standalone: true,
  imports: [ChartModule],
  templateUrl: './reports.component.html',
  styleUrl: './reports.component.css'
})
export class ReportsComponent {
  data: any;
  options: any;

  constructor() {
    this.data = {
      labels: ['DB 1', 'DB 2', 'DB 3', 'DB 4', 'DB 5'],
      datasets: [
        {
          label: 'Number of Items',
          data: [50, 75, 120, 40, 90],
          backgroundColor: ['#7684FC', '#7684FC', '#7684FC', '#7684FC', '#7684FC'],
        },
      ],
    };

    this.options = {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        x: {
          beginAtZero: true,
        },
        y: {
          beginAtZero: true,
        },
      },
    };
  }
}
