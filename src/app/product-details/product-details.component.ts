import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product, products } from '../products';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
})
export class ProductDetailsComponent implements OnInit {
  product: Product | undefined;

  constructor(
    private route: ActivatedRoute,
    private cartService: CartService
  ) {}

  addToCart(product: Product) {
    this.cartService.addToCart(product);
    window.alert('Add to cart success');
  }

  ngOnInit() {
    const routerParamaps = this.route.snapshot.paramMap;
    const productIdFromRouter = Number(routerParamaps.get('productId'));

    this.product = products.find(
      (product) => product.id === productIdFromRouter
    );
  }
}
