import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/model/product';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {
  submitted = false;
  editForm: FormGroup;
  productData: Product[];

  constructor(
    public fb: FormBuilder,
    private actRoute: ActivatedRoute,
    private apiService: ApiService,
    private router: Router
  ) {}

  ngOnInit() {
    this.updateProduct();
    let id = this.actRoute.snapshot.paramMap.get('id');
    this.getProduct(id);
    this.editForm = this.fb.group({
      name: ['', [Validators.required,Validators.pattern("^[A-Za-z. ]+$")]],
      description: ['', [Validators.required]],
      price: ['', [Validators.required]],
    })
  }

  updateProfile(e) {
    this.editForm.get('designation').setValue(e, {
      onlySelf: true
    })
  }

  get myForm() {
    return this.editForm.controls;
  }

  getProduct(id) {
    this.apiService.getProduct(id).subscribe(data => {
      this.editForm.setValue({
        name: data['name'],
        description: data['description'],
        price: data['price'],
       
      });
    });
  }

  updateProduct() {
    this.editForm = this.fb.group({
      name: ['', [Validators.required]],
      description: ['', [Validators.required]],
      price: ['', [Validators.required]],
    })
  }

  onSubmit() {
    this.submitted = true;
    if (!this.editForm.valid) {
      return false;
    } else {
      if (window.confirm('Are you sure?')) {
        let id = this.actRoute.snapshot.paramMap.get('id');
        this.apiService.updateProduct(id, this.editForm.value)
          .subscribe(res => {
            this.router.navigateByUrl('/products-list');
            console.log('Product updated successfully!')
          }, (error) => {
            console.log(error)
          })
      }
    }
  }

}