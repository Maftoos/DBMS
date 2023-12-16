import { Component } from '@angular/core';

@Component({
  selector: 'app-overview',
  standalone: true,
  imports: [],
  templateUrl: './overview.component.html',
  styleUrl: './overview.component.css'
})
export class OverviewComponent {
  selectedGroup: string = 'server';
  selectedOrder: string = 'severity'

  selectTab(tab: string): void {
    this.selectedGroup = tab;
  }
  selectOrder(order: string): void{
    this.selectedOrder = order
  }

}
