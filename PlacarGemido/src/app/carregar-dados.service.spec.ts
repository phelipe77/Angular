import { TestBed, inject } from '@angular/core/testing';

import { CarregarDadosService } from './carregar-dados.service';

describe('CarregarDadosService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CarregarDadosService]
    });
  });

  it('should be created', inject([CarregarDadosService], (service: CarregarDadosService) => {
    expect(service).toBeTruthy();
  }));
});
