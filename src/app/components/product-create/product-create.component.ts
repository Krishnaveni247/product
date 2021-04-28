import { Component, NgZone, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {

  submitted = false;
  productForm: FormGroup;
  
  constructor(
    public fb: FormBuilder,
    private router: Router,
    private ngZone: NgZone,
    private apiService: ApiService
  ) { 
    this.mainForm();
  }

  ngOnInit() { } 

  mainForm() {
    this.productForm = this.fb.group({
      name: ['', [Validators.required,Validators.pattern("^[A-Za-z. ]+$")]],
      description: ['', [Validators.required]],
      price: ['', [Validators.required]],
      

    })
  }

  updateProfile(e){
    this.productForm.get('password').setValue(e, {
      onlySelf: true
    })
  }

  get myForm(){
    return this.productForm.controls;
  } 

  onSubmit() {
    this.submitted = true;
    if (!this.productForm.valid) {
      return false;
    } else {
      this.apiService.createProduct(this.productForm.value).subscribe(
        (res) => {
          console.log('Product successfully created!')
          this.ngZone.run(() => this.router.navigateByUrl('/products-list'))
        }, (error) => {
          console.log(error);
        });
    }
  }

}
