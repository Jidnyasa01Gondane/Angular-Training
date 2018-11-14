import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EgdirectiveComponent } from './egdirective.component';

describe('EgdirectiveComponent', () => {
  let component: EgdirectiveComponent;
  let fixture: ComponentFixture<EgdirectiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EgdirectiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EgdirectiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
