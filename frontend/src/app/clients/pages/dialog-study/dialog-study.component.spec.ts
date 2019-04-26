import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogStudyComponent } from './dialog-study.component';

describe('DialogStudyComponent', () => {
  let component: DialogStudyComponent;
  let fixture: ComponentFixture<DialogStudyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogStudyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogStudyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
