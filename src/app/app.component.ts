import { Component } from '@angular/core';
// import { RouterOutlet } from '@angular/router';
import { NavbarComponent} from '../app/component/navbar/navbar.component'
import { CardsComponent } from './component/cards/cards.component';
import { AboutusComponent } from './component/aboutus/aboutus.component';
import { FooterComponent } from './component/footer/footer.component';
import { HomeComponent } from './component/home/home.component';
import { RouterLink, RouterOutlet } from '@angular/router';
import { InstructorComponent } from './component/instructor/instructor.component';
import { CarosalComponent } from './component/carosal/carosal.component';
// import { RegisterComponent } from './component/register/register.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NavbarComponent,CardsComponent,AboutusComponent, FooterComponent,HomeComponent,RouterLink,RouterOutlet,InstructorComponent,CarosalComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  // schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppComponent {
  title = 'my-project';
}
