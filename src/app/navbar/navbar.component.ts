import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  navBar =[
    {id: '#home',title :'Home'},
    {id: '#body',title :'About'},
    {id: '#product',title :'Product'},
    {id: '#contact',title :'Contact'}
  ];

  
}
