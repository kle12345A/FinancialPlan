import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterModule } from '@angular/router';
import { ImportReportStep1Component } from '../import-report-step1/import-report-step1.component';

@Component({
  selector: 'app-monthly-report-list',
  standalone: true,
  imports: [CommonModule, RouterModule, RouterLink, RouterLinkActive, ImportReportStep1Component],
  templateUrl: './monthly-report-list.component.html',
  styleUrl: './monthly-report-list.component.scss'
})
export class MonthlyReportListComponent {

}
