import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { APIPaginaComponent } from './apipagina.component';

describe('APIPaginaComponent', () => {
  let component: APIPaginaComponent;
  let fixture: ComponentFixture<APIPaginaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ APIPaginaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(APIPaginaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
