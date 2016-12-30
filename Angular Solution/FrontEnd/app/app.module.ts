//the main entry point of the angular appliction
//main=>appModule=>aooComponent
//here we reference all the component globally to viwed from all over the application.


import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { ProductDetailsComponent } from './components/product-details.component';
import { WelcomeComponent } from './components/welcome.component';
import { ProductListComponent } from './components/productList.component';
import { PageNotFoundComponent } from './components/page-not-found.component';
import {AboutUsComponent} from './components/about-us.component';

@NgModule({
    imports:
    [
        BrowserModule,
        FormsModule,
        HttpModule,
        RouterModule.forRoot([
            { path: 'products', component: ProductListComponent },
            { path: 'product/:id', component: ProductDetailsComponent },
            { path: 'aboutus', component: AboutUsComponent },
            { path: 'welcome', component: WelcomeComponent },
            { path: '', redirectTo: 'welcome', pathMatch: 'full' },
            { path: '**', redirectTo: 'welcome', pathMatch: 'full' }
        ])
    ],
    declarations:
    [
        AppComponent,
        ProductListComponent,
        ProductDetailsComponent,
        WelcomeComponent,
        PageNotFoundComponent
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
