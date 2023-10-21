import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-b-page',
  standalone: true,
  imports: [CommonModule],
  template: `<h2 class="text-md">
    <span>Mail to:</span>
    <span class="font-mono font-bold">
      supercalifragilisticexpialidocious@gmail.com</span
    >
  </h2>`,
  styles: [],
})
export class BPageComponent {
  ngOnInit() {
    console.log('%cB Page Component Init!', 'color: green;');
  }
  ngOnDestroy() {
    console.warn('B Page Component Destroy!');
  }
}
