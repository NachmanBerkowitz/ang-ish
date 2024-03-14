import { Component } from "@angular/core";
import { RouterLink } from "@angular/router";

@Component(
  {
    standalone: true,
    imports: [RouterLink],
    template: `
    <div>Test</div>
    @defer(on timer(1000))
    {
      <div>One</div>
      <a [routerLink]="'./http'" >Link One</a>
    }
    @placeholder
    {
      <div>Placeholder One</div>
    }

    @defer(when showLink1)
    {
      <div>One</div>
      <a [routerLink]="'./'" >Link One</a>
    }
    @placeholder
    {
      <div>Placeholder One</div>
    }
    `
  }
) export default class TestComponent{
  showLink1 = false
  constructor(){
    setTimeout(() => this.showLink1 = true, 2000)
  }
}