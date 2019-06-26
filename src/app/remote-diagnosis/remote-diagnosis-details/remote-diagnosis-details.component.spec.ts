import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RemoteDiagnosisDetailsComponent } from './remote-diagnosis-details.component';

describe('RemoteDiagnosisDetailsComponent', () => {
  let component: RemoteDiagnosisDetailsComponent;
  let fixture: ComponentFixture<RemoteDiagnosisDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RemoteDiagnosisDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RemoteDiagnosisDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
