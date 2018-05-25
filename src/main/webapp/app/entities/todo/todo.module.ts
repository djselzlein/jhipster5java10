import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { Jhipster5Java10SharedModule } from 'app/shared';
import {
    TodoService,
    TodoComponent,
    TodoDetailComponent,
    TodoUpdateComponent,
    TodoDeletePopupComponent,
    TodoDeleteDialogComponent,
    todoRoute,
    todoPopupRoute,
    TodoResolve,
    TodoResolvePagingParams
} from './';

const ENTITY_STATES = [...todoRoute, ...todoPopupRoute];

@NgModule({
    imports: [Jhipster5Java10SharedModule, RouterModule.forChild(ENTITY_STATES)],
    declarations: [TodoComponent, TodoDetailComponent, TodoUpdateComponent, TodoDeleteDialogComponent, TodoDeletePopupComponent],
    entryComponents: [TodoComponent, TodoUpdateComponent, TodoDeleteDialogComponent, TodoDeletePopupComponent],
    providers: [TodoService, TodoResolve, TodoResolvePagingParams],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class Jhipster5Java10TodoModule {}
