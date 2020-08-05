import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowFiltersComponent } from './show-filters.component';

describe('ShowFiltersComponent', () => {
  let component: ShowFiltersComponent;
  let fixture: ComponentFixture<ShowFiltersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowFiltersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowFiltersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
