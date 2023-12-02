import { Injectable, computed, signal } from '@angular/core';
import { Product } from '../../products/data-access/product.service';

export interface CartState {
  cartItems: CartItem[];
}

export interface CartItem {
  item: Product;
  quantity: number;
}

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private cartState = signal<CartState>({
    cartItems: [],
  });

  // selectors
  totalQty = computed(() => this.cartState().cartItems.length);

  constructor() {}

  addToCart(cartItem: CartItem): void {
    this.cartState.update((cartState) => ({
      ...cartState,
      cartItems: [...cartState.cartItems, cartItem],
    }));
  }
}
