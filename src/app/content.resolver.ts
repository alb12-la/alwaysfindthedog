import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { Inject, Injectable } from '@angular/core';
import { Resolve, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';

@Injectable()
export class ContentResolver implements Resolve<string> {
    constructor(
    ) { }
    async resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<string> {
        console.log('RESOLVER: ROUTE', route);
        return route.url[0].path;
    }
}
