import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { Store } from '@ngrx/store';

import { Observable, map, take, tap } from 'rxjs';

export const userGuard: CanActivateFn = (route, state) => {
  const store = inject(Store);
  const router = inject(Router);

  return true
};
