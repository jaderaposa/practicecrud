import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostDagdagComponent } from './post-dagdag.component';

describe('PostDagdagComponent', () => {
  let component: PostDagdagComponent;
  let fixture: ComponentFixture<PostDagdagComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PostDagdagComponent]
    });
    fixture = TestBed.createComponent(PostDagdagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
