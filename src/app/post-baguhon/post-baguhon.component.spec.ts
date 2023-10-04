import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostBaguhonComponent } from './post-baguhon.component';

describe('PostBaguhonComponent', () => {
  let component: PostBaguhonComponent;
  let fixture: ComponentFixture<PostBaguhonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PostBaguhonComponent]
    });
    fixture = TestBed.createComponent(PostBaguhonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
