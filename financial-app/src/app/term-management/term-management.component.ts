import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterModule } from '@angular/router';

@Component({
  selector: 'app-term-management',
  standalone: true,
  imports: [RouterModule, RouterLink, RouterLinkActive],
  templateUrl: './term-management.component.html',
  styleUrl: './term-management.component.scss'
})
export class TermManagementComponent {

}
