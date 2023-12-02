import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [
    CommonModule,
  ],
  template: `<p>cart works!</p>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CartComponent { }
