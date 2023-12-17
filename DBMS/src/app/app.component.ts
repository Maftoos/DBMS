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
import { MonitoredServersComponent } from './Components/monitored-servers/monitored-servers.component';
import { AlertsHomeComponent } from './Components/alerts-home/alerts-home.component';
import { AlertDatabasesComponent } from './Components/alert-databases/alert-databases.component';
import { AlertsMessagesComponent } from './Components/alerts-messages/alerts-messages.component';
import { AlertObjectsComponent } from './Components/alert-objects/alert-objects.component';
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
              HomeComponent,
              MonitoredServersComponent,
              AlertsHomeComponent,
              AlertDatabasesComponent,
              AlertsMessagesComponent,
              AlertObjectsComponent
             ]
    
})
export class AppComponent {
  title = 'DBMS';
}
