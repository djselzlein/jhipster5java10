import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { ITodo } from 'app/shared/model/todo.model';
import { TodoService } from './todo.service';

@Component({
    selector: 'jhi-todo-update',
    templateUrl: './todo-update.component.html'
})
export class TodoUpdateComponent implements OnInit {
    private _todo: ITodo;
    isSaving: boolean;
    dueDateDp: any;

    constructor(private todoService: TodoService, private route: ActivatedRoute) {}

    ngOnInit() {
        this.isSaving = false;
        this.route.data.subscribe(({ todo }) => {
            this.todo = todo.body ? todo.body : todo;
        });
    }

    previousState() {
        window.history.back();
    }

    save() {
        this.isSaving = true;
        if (this.todo.id !== undefined) {
            this.subscribeToSaveResponse(this.todoService.update(this.todo));
        } else {
            this.subscribeToSaveResponse(this.todoService.create(this.todo));
        }
    }

    private subscribeToSaveResponse(result: Observable<HttpResponse<ITodo>>) {
        result.subscribe((res: HttpResponse<ITodo>) => this.onSaveSuccess(), (res: HttpErrorResponse) => this.onSaveError());
    }

    private onSaveSuccess() {
        this.isSaving = false;
        this.previousState();
    }

    private onSaveError() {
        this.isSaving = false;
    }
    get todo() {
        return this._todo;
    }

    set todo(todo: ITodo) {
        this._todo = todo;
    }
}
