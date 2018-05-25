import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Routes } from '@angular/router';
import { JhiPaginationUtil } from 'ng-jhipster';

import { UserRouteAccessService } from 'app/core';
import { Todo } from 'app/shared/model/todo.model';
import { TodoService } from './todo.service';
import { TodoComponent } from './todo.component';
import { TodoDetailComponent } from './todo-detail.component';
import { TodoUpdateComponent } from './todo-update.component';
import { TodoDeletePopupComponent } from './todo-delete-dialog.component';

@Injectable()
export class TodoResolvePagingParams implements Resolve<any> {
    constructor(private paginationUtil: JhiPaginationUtil) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        const page = route.queryParams['page'] ? route.queryParams['page'] : '1';
        const sort = route.queryParams['sort'] ? route.queryParams['sort'] : 'id,asc';
        return {
            page: this.paginationUtil.parsePage(page),
            predicate: this.paginationUtil.parsePredicate(sort),
            ascending: this.paginationUtil.parseAscending(sort)
        };
    }
}

@Injectable()
export class TodoResolve implements Resolve<any> {
    constructor(private service: TodoService) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        const id = route.params['id'] ? route.params['id'] : null;
        if (id) {
            return this.service.find(id);
        }
        return new Todo();
    }
}

export const todoRoute: Routes = [
    {
        path: 'todo',
        component: TodoComponent,
        resolve: {
            pagingParams: TodoResolvePagingParams
        },
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'jhipster5Java10App.todo.home.title'
        },
        canActivate: [UserRouteAccessService]
    },
    {
        path: 'todo/:id/view',
        component: TodoDetailComponent,
        resolve: {
            todo: TodoResolve
        },
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'jhipster5Java10App.todo.home.title'
        },
        canActivate: [UserRouteAccessService]
    },
    {
        path: 'todo/new',
        component: TodoUpdateComponent,
        resolve: {
            todo: TodoResolve
        },
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'jhipster5Java10App.todo.home.title'
        },
        canActivate: [UserRouteAccessService]
    },
    {
        path: 'todo/:id/edit',
        component: TodoUpdateComponent,
        resolve: {
            todo: TodoResolve
        },
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'jhipster5Java10App.todo.home.title'
        },
        canActivate: [UserRouteAccessService]
    }
];

export const todoPopupRoute: Routes = [
    {
        path: 'todo/:id/delete',
        component: TodoDeletePopupComponent,
        resolve: {
            todo: TodoResolve
        },
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'jhipster5Java10App.todo.home.title'
        },
        canActivate: [UserRouteAccessService],
        outlet: 'popup'
    }
];
