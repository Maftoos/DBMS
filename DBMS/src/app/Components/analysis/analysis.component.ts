import { Component, OnInit } from '@angular/core';
import { ChartModule } from 'primeng/chart';

@Component({
  selector: 'app-analysis',
  standalone: true,
  imports: [ChartModule],
  templateUrl: './analysis.component.html',
  styleUrl: './analysis.component.css'
})
export class AnalysisComponent implements OnInit {
FirstChartData: any;
FirstChartOptions: any;
SecondChartData:any;
  ngOnInit(): void {
    this.FirstChartData = {
      labels: ['12:00', '14:00', '16:00', '18:00', '20:00', '22:00', '24:00'],
      datasets: [
        {
          label: 'CPU',
          data: [65, 59, 80, 81, 56, 55, 40],
          fill: false,
          borderColor: '#374AF9',
        },
        {
          label: 'Memory',
          data: [28, 48, 40, 19, 86, 27, 90],
          fill: false,
          borderColor: '#553D8E',
        },
        {
          label: 'Disk I/O',
          data: [99, 34, 82, 16, 32, 50, 63],
          fill: false,
          borderColor: '#28C76F',
        },
        {
          label: 'Waits',
          data: [10, 33, 90, 100, 32, 12, 59],
          fill: false,
          borderColor: '#FFA825',
        },
      ]
    };

    this.FirstChartOptions = {
      responsive: false,
      maintainAspectRatio: false,
      title: {
        display: true,
        text: 'Analysis Chart',
        fontSize: 16,
      },
      legend: {
        position: 'top',
        align: 'start', // Move legend to the left
      },
      scales: {
        x: [{
          ticks: {
            beginAtZero: true,
          }
        }],
        y: [{
          ticks: {
            beginAtZero: true,
          }
        }]
      },
    };

    this.SecondChartData ={
      labels: ['12:00', '14:00', '16:00', '18:00', '20:00', '22:00', '24:00'],
      datasets: [
        {
          label: 'Sql Server',
          data: [65, 59, 80, 81, 56, 55, 40],
          fill: true,
          borderColor: '#8571F4',
          backgroundColor: 'rgba(90, 86, 123, 0.33)'
        },
        {
          label: 'Machine',
          data: [63, 52, 75, 75, 52, 51, 30],
          fill: true,
          borderColor: '#374AF9',
          backgroundColor: 'rgba(90, 86, 123, 0.33)'
        },
      ]
    };
    
  }
}
