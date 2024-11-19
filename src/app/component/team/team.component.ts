import { Component } from '@angular/core';
import { InstructorComponent } from '../instructor/instructor.component';

@Component({
  selector: 'app-team',
  standalone: true,
  imports: [InstructorComponent],
  templateUrl: './team.component.html',
  styleUrl: './team.component.css'
})
export class TeamComponent {

}
