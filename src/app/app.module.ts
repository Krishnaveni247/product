import { BrowserModule } from '@angular/platform-browser';

import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { ApiService } from './service/api.service';
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { MatIconModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { HttpModule } from '@angular/http';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ProductCreateComponent } from './components/product-create/product-create.component';
import { ProductEditComponent } from './components/product-edit/product-edit.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { NumbersOnlyModule } from './directives/numbers-only.module';
import { NocopypasteModule } from './directives/nocopypaste/nocopypaste.module';

@NgModule({ 
  declarations: [
    AppComponent,
    ProductCreateComponent,
    ProductEditComponent,
    ProductListComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule, 
    FormsModule,
    ReactiveFormsModule,
    MatIconModule,
    BrowserAnimationsModule,
    NumbersOnlyModule,
    NocopypasteModule,
    BsDropdownModule.forRoot(),
    BsDatepickerModule.forRoot(),
  ],  
  providers: [ApiService,HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
