import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ProductsComponent } from './products/products.component';
import { HomeComponent } from './home/home.component';
import { DetailsComponent } from './details/details.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AddComponent } from './add/add.component';
import { EditComponent } from './edit/edit.component';
import { DeleteComponent } from './delete/delete.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ProductsComponent,
    HomeComponent,
    DetailsComponent,
    AddComponent,
    EditComponent,
    DeleteComponent,
    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
