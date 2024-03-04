import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  count = 0;
  animation = false;
  add(value: number) {
    this.animation = true
    this.count = this.count + value;
    setTimeout(() => {
      this.animation = false
    }, 500)
  }
  subtract(value: number) {
    this.count = this.count - value;
  }
  reset() {
    this.count = 0;
  }
}
