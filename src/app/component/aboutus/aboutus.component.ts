
import { JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
@Component({
  selector: 'app-aboutus',
  standalone: true,
  imports: [JsonPipe],
  templateUrl: './aboutus.component.html',
  styleUrl: './aboutus.component.css'
})
export class AboutusComponent {

  titles = {
    title: 'About Us',
    heading: 'Learn New Skills to go ahead for Your Career',
    sub_heading:"We can support student forum 24/7 for national and international students.",
    para:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia laborum.",
    img_text:"A place where you can achieve",
    text_para:"Education encompasses both the teaching and learning of knowledge, proper conduct, and technical competency."
  }

}
