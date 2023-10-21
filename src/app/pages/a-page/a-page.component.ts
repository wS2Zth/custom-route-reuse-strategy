import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HlmInputDirective } from '@spartan-ng/ui-input-helm';
import { HlmLabelDirective } from '@spartan-ng/ui-label-helm';

@Component({
  selector: 'app-a-page',
  standalone: true,
  imports: [CommonModule, HlmInputDirective, HlmLabelDirective],
  template: `
    <div>
      <label class="text-md" hlmLabel>Email</label>
      <input class="w-80 text-lg" hlmInput placeholder="Email" type="mail" />
    </div>
  `,
  styles: [],
})
export class APageComponent {
  ngOnInit() {
    console.log('%cA Page Component Init!', 'color: green;');
  }
  ngOnDestroy() {
    console.warn('A Page Component Destroy!');
  }
}
