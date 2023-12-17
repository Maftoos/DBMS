import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-data-settings',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './data-settings.component.html',
  styleUrl: './data-settings.component.css'
})
export class DataSettingsComponent {
  //im too lazy to write objects
  getLoopCount(count: number): number[] {
    return new Array(count);
  }
}
