import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewgitComponent } from './newgit.component';

describe('NewgitComponent', () => {
  let component: NewgitComponent;
  let fixture: ComponentFixture<NewgitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewgitComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewgitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
