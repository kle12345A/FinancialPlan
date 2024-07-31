import { Routes } from '@angular/router';
import { MonthlyReportListComponent } from './monthly-report-list/monthly-report-list.component';
import { ImportReportStep1Component } from './import-report-step1/import-report-step1.component';
import { ImportReportStep2Component } from './import-report-step2/import-report-step2.component';
import { MonthlyReportDetailsComponent } from './monthly-report-details/monthly-report-details.component';
import { ReupReport1Component } from './reup-report1/reup-report1.component';
import { ReupReport2Component } from './reup-report2/reup-report2.component';
import { TermManagementComponent } from './term-management/term-management.component';

export const routes: Routes = [
  { path: '', redirectTo: '/monthly-report-list', pathMatch: 'full' }, // Đường dẫn mặc định
  { path: 'monthly-report-list', component: MonthlyReportListComponent }, // Đường dẫn tới MonthlyReportListComponent trực tiếp
  { path: 'term-management', component: TermManagementComponent, children: [
      { path: '', redirectTo: 'monthly-report-list', pathMatch: 'full' }, // Redirect khi đường dẫn trống
      { path: 'monthly-report-list', component: MonthlyReportListComponent }, // Đường dẫn con trong term-management
      { path: 'import', component: ImportReportStep1Component },
      { path: 'review', component: ImportReportStep2Component },
      { path: 'report-details', component: MonthlyReportDetailsComponent },
      { path: 'reup-report1', component: ReupReport1Component },
      { path: 'reup-report2', component: ReupReport2Component },
    ]},
];
