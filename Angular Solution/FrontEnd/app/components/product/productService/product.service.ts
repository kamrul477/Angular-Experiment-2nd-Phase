
import { Http, Response,Jsonp } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { IProduct } from '../../../models/product.model';
import {Injectable} from '@angular/core';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
//import 'rxjs/add/operator/toPromise';
// Add the RxJS Observable operators.
//import './rxjs-operators';
@Injectable()

export class ProductService {

    private _productUrl = 'http://localhost:52086/api/Product';
    constructor(private _http: Http) { }

    getProducts(): Observable<IProduct[]> {
        return this._http.get(this._productUrl)
            .map((response: Response) => <IProduct[]>response.json())
            .do(data => console.log('All' + JSON.stringify(data)))
            .catch(this.handleError);
    }

    getProduct(id:number):Observable<IProduct>{
       let productUrl = 'http://localhost:52086/api/Product/:id';
            return this._http.get(productUrl).map((response:Response)=><IProduct>response.json());
            //return this.getProducts().toPromise().then(products =>products.find(product=>product.id==id))
            
    }
    private handleError(error: Response) {
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }

}