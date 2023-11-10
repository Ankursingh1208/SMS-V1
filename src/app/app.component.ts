import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from './footer/footer.component';
import HeaderComponent from './header/header.component';
import { StudentsComponent } from './students/students.component';
import { LoginComponent } from "./login/login.component";
import { HomeComponent } from "./home/home.component";
import { ResisterComponent } from "./resister/resister.component";
import { AboutusComponent } from "./aboutus/aboutus.component";
import { ContactusComponent } from "./contactus/contactus.component";
import { SortComponent } from "./sort/sort.component";


@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    imports: [CommonModule, RouterOutlet, FooterComponent, HeaderComponent, StudentsComponent, LoginComponent, HomeComponent, ResisterComponent, AboutusComponent, ContactusComponent, SortComponent]
})
export class AppComponent {
  title = 'helloworld';
}
