import { Component, OnInit } from '@angular/core';
declare var $: any;
declare var jQuery: any;


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $(function() {

      $("#cart-checkout").steps({
        headerTag: "h3",
        bodyTag: "section",
        transitionEffect: 0,
        autoFocus: true
      });

    });
  }

}
