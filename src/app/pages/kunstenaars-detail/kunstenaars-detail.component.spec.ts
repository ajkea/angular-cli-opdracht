import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KunstenaarsDetailComponent } from './kunstenaars-detail.component';

describe('KunstenaarsDetailComponent', () => {
  let component: KunstenaarsDetailComponent;
  let fixture: ComponentFixture<KunstenaarsDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KunstenaarsDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KunstenaarsDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
