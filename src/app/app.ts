import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import * as AOS from 'aos';
import { Home } from "./home/home";
import { Header } from './header/header';
import { Footer } from "./footer/footer";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Home, Header, Footer],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('portfolio');
  ngOnInit() {
    AOS.init()
    window.addEventListener('load', AOS.refresh)
  }
}
