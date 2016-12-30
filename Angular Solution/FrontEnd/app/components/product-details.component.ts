import {Component} from "@angular/core";
import {IProduct} from "../models/product.model";


@Component({
templateUrl:"./app/components/product-details.component.html"
})
export class ProductDetailsComponent{
    pageTitle:string="Product Details";
    product:IProduct;
 }