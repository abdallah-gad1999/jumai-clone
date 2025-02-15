import { TestBed } from '@angular/core/testing';
import { ResolveFn } from '@angular/router';

import { checkOutResolver } from './check-out.resolver';

describe('checkOutResolver', () => {
  const executeResolver: ResolveFn<boolean> = (...resolverParameters) => 
      TestBed.runInInjectionContext(() => checkOutResolver(...resolverParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeResolver).toBeTruthy();
  });
});
