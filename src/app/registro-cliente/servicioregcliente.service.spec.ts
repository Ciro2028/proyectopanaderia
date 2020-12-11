import { TestBed } from '@angular/core/testing';

import { ServicioregclienteService } from './servicioregcliente.service';

describe('ServicioregclienteService', () => {
  let service: ServicioregclienteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicioregclienteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
