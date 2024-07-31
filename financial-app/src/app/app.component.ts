import { Component, Directive } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterModule, RouterOutlet } from '@angular/router';
import { MonthlyReportListComponent } from './monthly-report-list/monthly-report-list.component';
import { HeaderComponent } from './header/header.component';
import { ImportReportStep1Component } from './import-report-step1/import-report-step1.component';
import { ImportReportStep2Component } from './import-report-step2/import-report-step2.component';
import { MonthlyReportDetailsComponent } from './monthly-report-details/monthly-report-details.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,RouterModule, RouterLink, RouterLinkActive ,MonthlyReportListComponent, HeaderComponent, ImportReportStep1Component, ImportReportStep2Component, MonthlyReportDetailsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'financial-app';
}
