import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ContinuarPersecucioComponent } from './continuar-persecucio.component';

describe('ContinuarPersecucioComponent', () => {
  let component: ContinuarPersecucioComponent;
  let fixture: ComponentFixture<ContinuarPersecucioComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ContinuarPersecucioComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ContinuarPersecucioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
