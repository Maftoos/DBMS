import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './Components/login-page/login-page.component';
import { HomeComponent } from './Components/home/home.component';
import { OverviewComponent } from './Components/overview/overview.component';
import { AnalysisComponent } from './Components/analysis/analysis.component';
import { ConfigurationComponent } from './Components/configuration/configuration.component';
import { NgModule } from '@angular/core';
export const routes: Routes = [
    { path: 'analysis', component: AnalysisComponent },
    { path: 'overview', component: OverviewComponent },
    { path: 'configuration', component: ConfigurationComponent },
    
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
export class AppRoutingModule { }
