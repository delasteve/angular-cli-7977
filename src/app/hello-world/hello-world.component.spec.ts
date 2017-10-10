import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HelloWorldComponent } from './hello-world.component';
import { HelloWorldService } from '../hello-world.service';

describe('HelloWorldComponent', () => {
  let component: HelloWorldComponent;
  let fixture: ComponentFixture<HelloWorldComponent>;

  beforeEach(async(() => {
    TestBed
      .configureTestingModule({
        declarations: [HelloWorldComponent]
      })
      .overrideComponent(HelloWorldComponent, {
        set: {
          providers: [
            { provide: HelloWorldService, useValue: new HelloWorldService(null) }
          ],
        }
      })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HelloWorldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
