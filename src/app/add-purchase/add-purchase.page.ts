import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { SellerUtilsService } from 'src/services/SellerUtils/seller-utils.service';


@Component({
  selector: 'app-add-purchase',
  templateUrl: './add-purchase.page.html',
  styleUrls: ['./add-purchase.page.scss'],
})
export class AddPurchasePage implements OnInit {

  public addChildStock: FormGroup = new FormGroup({
    name: new FormControl('test'),
    quantity: new FormControl('test'),
  });

  public searchTextFrom: FormGroup = new FormGroup({
    searchText: new FormControl(''),
    phoneNumber: new FormControl(''),
    address: new FormControl(''),

  });

  public containers = [];
  public textIsempty: boolean = false
  public data = ['Rohan', 'Mohan', 'Sohan', 'Ranjnikant'];
  public results = [...this.data];
  products = []
  modals = []

  constructor(private seller: SellerUtilsService) { }

  ngOnInit() {
  }

  add() {
    this.containers.push(this.containers.length);
  }


  handleChange(event) {
    const query = event.target.value.toLowerCase();
    this.results = this.data.filter(d => d.toLowerCase().indexOf(query) > -1);
    this.textIsempty = true;
  }


  setValue(searchText: string) {
    this.textIsempty = false;
    console.log(this.searchTextFrom.value);
    this.searchTextFrom.controls["searchText"].setValue(searchText);
  }


  addPurchase() {
    const data = [this.addChildStock.value, this.searchTextFrom.value]
    console.log(data)
    // this.seller.addPurchase(data)
  }

}


