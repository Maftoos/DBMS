import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-deadlock-event',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './deadlock-event.component.html',
  styleUrl: './deadlock-event.component.css'
})
export class DeadlockEventComponent {
  toggle:boolean = false;
  changeToggle(){
    this.toggle = !this.toggle
    console.log(this.toggle)
  }
}
