import { Component, OnInit } from '@angular/core';

declare var $: any;
declare var jQuery: any;

@Component({
  selector: 'app-candy',
  templateUrl: './candy.component.html',
  styleUrls: ['./candy.component.css']
})
export class CandyComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $(function () {

      $('.cat__ecommerce__catalog__item__like').on('click', function(){
        $(this).toggleClass('cat__ecommerce__catalog__item__like--selected')
      });

      $("[data-toggle=tooltip]").tooltip();

    });
  }

}
