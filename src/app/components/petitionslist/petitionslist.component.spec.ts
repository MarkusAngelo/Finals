import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PetitionslistComponent } from './petitionslist.component';

describe('PetitionslistComponent', () => {
  let component: PetitionslistComponent;
  let fixture: ComponentFixture<PetitionslistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PetitionslistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PetitionslistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
