import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RepeatBackComponent } from './repeat-back.component';

describe('RepeatBackComponent', () => {
  let component: RepeatBackComponent;
  let fixture: ComponentFixture<RepeatBackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RepeatBackComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RepeatBackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
