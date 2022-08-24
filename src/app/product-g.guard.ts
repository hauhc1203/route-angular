import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import {ProductService} from "./services/product.service";

@Injectable({
  providedIn: 'root'
})
export class ProductGGuard implements CanActivate {
  productService:ProductService;
  constructor(productService:ProductService) {
    this.productService=productService;
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (this.productService.products.length > 12) {
      return true;
    } else {
      return false
    }
  }

}
