import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RemoteDiagnosisComponent } from './remote-diagnosis.component';

describe('RemoteDiagnosisComponent', () => {
  let component: RemoteDiagnosisComponent;
  let fixture: ComponentFixture<RemoteDiagnosisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RemoteDiagnosisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RemoteDiagnosisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
