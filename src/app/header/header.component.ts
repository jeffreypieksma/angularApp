import { Component } from '@angular/core';
import { LoginComponent } from '../auth/login/login.component';

@Component({
    providers: [ LoginComponent ],
    selector: 'app-header',
    templateUrl: './header.component.html'
})

export class HeaderComponent {
    constructor(private login: LoginComponent ) { }

    public onLogout(): void {
        this.login.onLogout();
    }
}

