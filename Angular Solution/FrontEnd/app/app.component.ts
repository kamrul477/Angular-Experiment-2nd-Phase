import { ProductService } from './services/product.service';
import { Component } from '@angular/core';

@Component({
  selector: 'pm-app',
  templateUrl:'./app/app.component.html', 
  providers: [ProductService]
})
export class AppComponent {
  pageTitle: string = 'ACME Product Management';
}
