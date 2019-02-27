import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductosListItemsComponent } from './productos-list-items.component';

describe('ProductosListItemsComponent', () => {
  let component: ProductosListItemsComponent;
  let fixture: ComponentFixture<ProductosListItemsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductosListItemsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductosListItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
