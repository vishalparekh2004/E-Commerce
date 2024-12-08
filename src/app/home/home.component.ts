// import { Component ,EventEmitter,OnInit, Output} from '@angular/core';
// import { FakeProductsService } from '../fake-products.service';
// import { count } from 'rxjs';
// @Component({
//   selector: 'app-home',
//   templateUrl: './home.component.html',
//   styleUrl: './home.component.css'
// })
// export class HomeComponent implements OnInit {
//   products:any;
// constructor(private fs:FakeProductsService){

// }
// ngOnInit(){
//   this.fs.getData().subscribe((data)=>this.products=data.products)
// }
// add(){
//   this.fs.add(item)
// }
// }
import { Component, OnInit } from '@angular/core';
import { FakeProductsService } from '../fake-products.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'] // Corrected 'styleUrl' to 'styleUrls'
})
export class HomeComponent implements OnInit {
  products: any;

  constructor(private fs: FakeProductsService) {}

  ngOnInit() {
    this.fs.getData().subscribe((data) => this.products = data.products);
  }

  add(item: any) { // Accepting a parameter
    this.fs.add(item); // Using the passed parameter
  }
}
