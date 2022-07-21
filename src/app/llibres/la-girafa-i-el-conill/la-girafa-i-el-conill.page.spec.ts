import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LaGirafaIElConillPage } from './la-girafa-i-el-conill.page';

describe('LaGirafaIElConillPage', () => {
  let component: LaGirafaIElConillPage;
  let fixture: ComponentFixture<LaGirafaIElConillPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ LaGirafaIElConillPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LaGirafaIElConillPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
