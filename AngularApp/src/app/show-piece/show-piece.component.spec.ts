import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowPieceComponent } from './show-piece.component';

describe('ShowPieceComponent', () => {
  let component: ShowPieceComponent;
  let fixture: ComponentFixture<ShowPieceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowPieceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowPieceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
