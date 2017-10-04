import { Component, OnInit } from '@angular/core';
import { NgFor } from '@angular/common';
import { CarregarDadosService } from './../carregar-dados.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  pessoas: any[];

  constructor(private carregarDadosService: CarregarDadosService) { }

  ngOnInit() {
    this.pessoas = this.carregarDadosService.carregarDados();
  }

}
