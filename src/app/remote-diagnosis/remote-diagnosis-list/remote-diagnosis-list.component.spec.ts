import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RemoteDiagnosisListComponent } from './remote-diagnosis-list.component';

describe('RemoteDiagnosisListComponent', () => {
  let component: RemoteDiagnosisListComponent;
  let fixture: ComponentFixture<RemoteDiagnosisListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RemoteDiagnosisListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RemoteDiagnosisListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
