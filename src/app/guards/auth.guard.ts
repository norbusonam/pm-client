import { Injectable } from '@angular/core';
import { 
  CanActivate,
  Router
} from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { ApiService } from '../services/api.service';

@Injectable({
  providedIn: 'root'
})

export class AuthGuard implements CanActivate {

  constructor(
    public api: ApiService, 
    public router: Router,
  ) {  }

  canActivate(): Observable<boolean> {
    return this.api.getAuthStatus().pipe(
      map(authStatus => { 
        console.log(authStatus)
        if (!authStatus) {
          this.router.navigate(['login']);
          return false;
        }
        return true;
      })
    )
  }
  
}
