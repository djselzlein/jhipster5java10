import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { Jhipster5Java10SharedModule } from 'app/shared';

import {
    Register,
    ActivateService,
    PasswordService,
    PasswordResetInitService,
    PasswordResetFinishService,
    SessionsService,
    SessionsComponent,
    PasswordStrengthBarComponent,
    RegisterComponent,
    ActivateComponent,
    PasswordComponent,
    PasswordResetInitComponent,
    PasswordResetFinishComponent,
    SettingsComponent,
    accountState
} from './';

@NgModule({
    imports: [Jhipster5Java10SharedModule, RouterModule.forChild(accountState)],
    declarations: [
        ActivateComponent,
        RegisterComponent,
        PasswordComponent,
        PasswordStrengthBarComponent,
        PasswordResetInitComponent,
        PasswordResetFinishComponent,
        SessionsComponent,
        SettingsComponent
    ],
    providers: [SessionsService, Register, ActivateService, PasswordService, PasswordResetInitService, PasswordResetFinishService],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class Jhipster5Java10AccountModule {}
