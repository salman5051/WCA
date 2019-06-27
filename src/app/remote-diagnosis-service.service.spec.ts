import { TestBed } from '@angular/core/testing';

import { RemoteDiagnosisServiceService } from './remote-diagnosis-service.service';

describe('RemoteDiagnosisServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RemoteDiagnosisServiceService = TestBed.get(RemoteDiagnosisServiceService);
    expect(service).toBeTruthy();
  });
});
