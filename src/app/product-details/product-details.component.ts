import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product, products } from '../products';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  product: Product | undefined;
  constructor(private route: ActivatedRoute) { }
  /**
   * Angular 路由器加载的每个组件都有自己专属的 ActivatedRoute。ActivatedRoute 中包含有关路由和路由参数的信息。
   * 通过注入 ActivatedRoute，你可以配置此组件以使用服务。
   */
  ngOnInit(): void {
    const routeParam = this.route.snapshot.paramMap;
    console.log(routeParam)
    const productIdFromRoute = Number(routeParam.get('productId'))
    this.product = products.find(i => i.id === productIdFromRoute)
  }

}
