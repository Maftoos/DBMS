import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstalledVersionsComponent } from './installed-versions.component';

describe('InstalledVersionsComponent', () => {
  let component: InstalledVersionsComponent;
  let fixture: ComponentFixture<InstalledVersionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InstalledVersionsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InstalledVersionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
