import {Component,OnInit} from "@angular/core";
import {IProduct} from "../models/product.model";
import {ActivatedRoute,Router} from '@angular/router'


@Component({
templateUrl:"./app/components/product-details.component.html"
})
export class ProductDetailsComponent implements OnInit{
    pageTitle:string="Product Details";
    product:IProduct;

    constructor(private _route:ActivatedRoute,private _router:Router){}

    ngOnInit():void{
        let id = +this._route.snapshot.params['id'];
        this.pageTitle += `: ${id}`;
    }
    onBack():void{
        this._router.navigate(['/products']);
    }
 }