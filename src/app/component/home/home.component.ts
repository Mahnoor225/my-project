import { Component } from '@angular/core';
import { AboutusComponent } from '../aboutus/aboutus.component';
import { CardsComponent } from '../cards/cards.component';
import { InstructorComponent } from '../instructor/instructor.component';
import { CarosalComponent } from '../carosal/carosal.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [AboutusComponent,CardsComponent,InstructorComponent,CarosalComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
