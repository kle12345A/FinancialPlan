import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterModule } from '@angular/router';

@Component({
  selector: 'app-import-report-step1',
  standalone: true,
  imports: [RouterLink, RouterModule, RouterLinkActive],
  templateUrl: './import-report-step1.component.html',
  styleUrl: './import-report-step1.component.scss'
})
export class ImportReportStep1Component {

}
