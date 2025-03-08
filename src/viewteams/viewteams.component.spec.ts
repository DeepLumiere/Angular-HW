import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewteamsComponent } from './viewteams.component';

describe('ViewteamsComponent', () => {
  let component: ViewteamsComponent;
  let fixture: ComponentFixture<ViewteamsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewteamsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewteamsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
