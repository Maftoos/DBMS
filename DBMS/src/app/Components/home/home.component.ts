import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { OverviewComponent } from '../overview/overview.component';
import { RouterOutlet } from '@angular/router';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NavbarComponent,
            OverviewComponent,
            RouterOutlet
           ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
