import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterModule } from '@angular/router';

@Component({
  selector: 'app-monthly-report-details',
  standalone: true,
  imports: [RouterModule, RouterLink, RouterLinkActive],
  templateUrl: './monthly-report-details.component.html',
  styleUrl: './monthly-report-details.component.scss'
})
export class MonthlyReportDetailsComponent {

}
