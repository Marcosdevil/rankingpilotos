import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VistaRankingComponent } from './vista-ranking.component';

describe('VistaRankingComponent', () => {
  let component: VistaRankingComponent;
  let fixture: ComponentFixture<VistaRankingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VistaRankingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VistaRankingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
