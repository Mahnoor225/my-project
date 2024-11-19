import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-cards',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cards.component.html',
  styleUrl: './cards.component.css'
})
export class CardsComponent {
  userData:any [] =[
    
    {id:1, image1:"https://templates.envytheme.com/raque/default/assets/img/courses/1.jpg",
      icon: `<svg aria-hidden="true" class="h-5 w-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
    </svg>`,
      image2:"https://templates.envytheme.com/raque/default/assets/img/user1.jpg", image2Text:"Steven Smith",  CardTitle:"Raque Professional IT Expert Certificate Course", Rating :"5.0 (1 rating)",students:"10 students",lessons:"6 lessons", price:"Free",category:"Business" },

    {id:2, image1:"https://templates.envytheme.com/raque/default/assets/img/courses/2.jpg",image2:"https://templates.envytheme.com/raque/default/assets/img/user2.jpg", image2Text:"Steven Smith",CardTitle:"Certified Graphic Design with Free Project Course", Rating :"5.0 (1 rating)",students:"10 students",lessons:"10 lessons", price:"$250",category:"Design" },
    
    {id:3, image1:"https://templates.envytheme.com/raque/default/assets/img/courses/3.jpg",image2:"https://templates.envytheme.com/raque/default/assets/img/user3.jpg", image2Text:"Steven Smith",  CardTitle:"Photography Crash Course for Photographer", Rating :"5.0 (1 rating)",students:"5 students",lessons:"5 lessons", price:"$150", category:"Development"},

    {id:4, image1:"https://templates.envytheme.com/raque/default/assets/img/courses/4.jpg",image2:"https://templates.envytheme.com/raque/default/assets/img/user4.jpg", image2Text:"Liam King",  CardTitle:"Web Design for Developing Technology with Joy", Rating :"5.0 (1 rating)", studentimage:"",students:"5 students", lessonimage:"",lessons:"5 lessons", price:"$195",category:"Language"},

    {id:5, image1:"https://templates.envytheme.com/raque/default/assets/img/courses/5.jpg",image2:"https://templates.envytheme.com/raque/default/assets/img/user5.jpg", image2Text:"Lina D'Souza",  CardTitle:"Information About UI/UX Design Degree", Rating :"5.0 (1 rating)", studentimage:"",students:"5 students", lessonimage:"",lessons:"5 lessons", price:"$178", category:"Management"},


    {id:6, image1:"https://templates.envytheme.com/raque/default/assets/img/courses/6.jpg",image2:"https://templates.envytheme.com/raque/default/assets/img/user6.jpg", image2Text:"David Warner",  CardTitle:"Photography Crash Course for Photographer", Rating :"5.0 (1 rating)", studentimage:"",students:"5 students", lessonimage:"",lessons:"5 lessons", price:"$500", category:"Photography"},
   ]
}
