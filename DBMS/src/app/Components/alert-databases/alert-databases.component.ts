import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../navbar/navbar.component';
@Component({
  selector: 'app-alert-databases',
  standalone: true,
  imports: [CommonModule,
  NavbarComponent],
  templateUrl: './alert-databases.component.html',
  styleUrl: './alert-databases.component.css'
})
export class AlertDatabasesComponent {
  getLoopCount(count: number): number[] {
    return new Array(count);
  }
}
