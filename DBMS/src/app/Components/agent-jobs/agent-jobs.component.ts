import { Component } from '@angular/core';
import { ChartModule } from 'primeng/chart';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-agent-jobs',
  standalone: true,
  imports: [ChartModule,
            CommonModule
           ],
  templateUrl: './agent-jobs.component.html',
  styleUrl: './agent-jobs.component.css'
})
export class AgentJobsComponent {
  data: any;
  options: any;
  constructor() {
    this.data = {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: [
        {
          label: 'Disk Space',
          data: [65, 59, 80, 81, 56, 55, 40],
          borderColor: '#45D0EE',
          fill: false,
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
