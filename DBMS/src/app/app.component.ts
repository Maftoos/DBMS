import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { LoginPageComponent } from './Components/login-page/login-page.component';
import { SidebarComponent } from './Components/sidebar/sidebar.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { OverviewComponent } from './Components/overview/overview.component';
import { AnalysisComponent } from './Components/analysis/analysis.component';
import { ManagementComponent } from './Components/management/management.component';
import { ChatComponent } from './Components/chat/chat.component';
import { ConfigurationComponent } from './Components/configuration/configuration.component';
import { DataSettingsComponent } from './Components/data-settings/data-settings.component';
import { HomeComponent } from './Components/home/home.component';
@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [CommonModule,
              RouterOutlet,
              LoginPageComponent,
              SidebarComponent,
              OverviewComponent,
              NavbarComponent,
              AnalysisComponent,
              ManagementComponent,
              ChatComponent,
              ConfigurationComponent,
              DataSettingsComponent,
              HomeComponent
             ]
    
})
export class AppComponent {
  title = 'DBMS';
}
