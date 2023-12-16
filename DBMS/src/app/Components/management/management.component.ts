import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-management',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './management.component.html',
  styleUrl: './management.component.css'
})
export class ManagementComponent implements OnInit {
 users: {name:string, role:string}[] = [];
 ngOnInit(): void {
  this.users = [{
    name:'Henry',
    role: 'Admin'
  },
  {
    name:'Arthur',
    role: 'User'
  },
  {
    name:'Jack',
    role: 'User'
  },
  {
    name:'Leo',
    role: 'Admin'
  },
  {
    name:'Anthony',
    role: 'User'
  },
  {
    name:'George',
    role: 'Admin'
  },
] 
 }
}
