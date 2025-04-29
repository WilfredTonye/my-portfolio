import { Component } from '@angular/core';
import { NavbarComponent } from "../Components/navbar/navbar.component";
import { ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faGithub, faInstagram, faBehance, faXTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
import Typed from 'typed.js';
import { FooterComponent } from "../Components/footer/footer.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NavbarComponent, FontAwesomeModule, FooterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements AfterViewInit {

  Github = faGithub;
  Insta = faInstagram;
  Behance = faBehance;
  Twitter = faXTwitter;
  Youtube = faYoutube;

  @ViewChild('typedElement', { static: true }) typedElement!: ElementRef;

  typed!: Typed;

  ngAfterViewInit(): void {
    this.typed = new Typed(this.typedElement.nativeElement, {
      strings: ['Software Engineer', 'ux ui designer', 'freelancer'],
      typeSpeed: 50,
      backSpeed: 40,
      loop: true
    });
  }
  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    if (this.typed) {
      this.typed.destroy();
    }
  }
}
