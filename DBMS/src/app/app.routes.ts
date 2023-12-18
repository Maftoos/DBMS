import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './Components/login-page/login-page.component';
import { HomeComponent } from './Components/home/home.component';
import { OverviewComponent } from './Components/overview/overview.component';
import { AnalysisComponent } from './Components/analysis/analysis.component';
import { ConfigurationComponent } from './Components/configuration/configuration.component';
import { NgModule } from '@angular/core';
import { AlertsHomeComponent } from './Components/alerts-home/alerts-home.component';
import { InstalledVersionsComponent } from './Components/installed-versions/installed-versions.component';
import { AlertsMessagesComponent } from './Components/alerts-messages/alerts-messages.component';
import { AlertObjectsComponent } from './Components/alert-objects/alert-objects.component';
import { AlertDatabasesComponent } from './Components/alert-databases/alert-databases.component';
import { DeadlockEventComponent } from './Components/deadlock-event/deadlock-event.component';
import { MonitoredServersComponent } from './Components/monitored-servers/monitored-servers.component';
import { AlertviewComponent } from './Components/alertview/alertview.component';
import { ReportsComponent } from './Components/reports/reports.component';
import { ChatComponent } from './Components/chat/chat.component';
import { DataSettingsComponent } from './Components/data-settings/data-settings.component';
import { DiskUsageComponent } from './Components/disk-usage/disk-usage.component';
import { AgentJobsComponent } from './Components/agent-jobs/agent-jobs.component';
export const routes: Routes = [
    { path: 'analysis', component: AnalysisComponent },
    { path: '', component: OverviewComponent },
    { path: 'reports', component: ReportsComponent },
    { path: 'chatbot', component: ChatComponent },
    { path: 'dataSetting', component: DataSettingsComponent },
    // { path: 'alert', component: AlertsHomeComponent,},
    // { path: 'messages', component: AlertsMessagesComponent },
        
        { path: 'alert', component: AlertsHomeComponent,},
        { path: 'login', component: LoginPageComponent,},
    { path: 'configuration', component: ConfigurationComponent },
    { path: 'estate1', component: InstalledVersionsComponent },
    { path: 'estate2', component: DiskUsageComponent },
    { path: 'estate3', component: AgentJobsComponent },
    { path: 'monitor', component: MonitoredServersComponent },
    
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
export class AppRoutingModule { }
