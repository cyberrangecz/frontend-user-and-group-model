import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KypoUserAndGroupModelComponent } from './kypo-user-and-group-model.component';

describe('KypoUserAndGroupModelComponent', () => {
  let component: KypoUserAndGroupModelComponent;
  let fixture: ComponentFixture<KypoUserAndGroupModelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KypoUserAndGroupModelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KypoUserAndGroupModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
