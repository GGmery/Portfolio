import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import * as AOS from 'aos';

import { HeaderComponent } from './header/header';
import { Home } from './home/home';
import { Footer } from './footer/footer';
import { ContactComponent } from './contact/contact';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, Home, Footer, ContactComponent],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class AppComponent {
  protected readonly title = signal('portfolio');

  ngOnInit() {
    AOS.init();
    window.addEventListener('load', AOS.refresh);
  }
}
