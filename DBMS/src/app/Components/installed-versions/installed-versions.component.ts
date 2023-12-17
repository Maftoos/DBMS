import { Component } from '@angular/core';
import { ChartModule } from 'primeng/chart';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-installed-versions',
  standalone: true,
  imports: [ChartModule,CommonModule],
  templateUrl: './installed-versions.component.html',
  styleUrl: './installed-versions.component.css'
})
export class InstalledVersionsComponent {
  data: any;
  options: any;
  constructor() {
    this.data = {
      labels: ['SQL Server 2019', 'SQL Server 2017', 'SQL Server 2016', 'SQL Server 2012', 'SQL Server 2008'],
      datasets: [
        {
          data: [300, 500, 100, 200, 400],
          backgroundColor: ['#040C59', '#1E00C5', '#0019FF', '#3558D1', '#607CE0'],
        },
      ],
    };

    this.options = {
      responsive: true,
      maintainAspectRatio: false,
    };
}
getLoopCount(count: number): number[] {
  return new Array(count);
}
}
