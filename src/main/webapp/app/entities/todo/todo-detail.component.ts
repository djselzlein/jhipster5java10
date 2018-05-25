import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ITodo } from 'app/shared/model/todo.model';

@Component({
    selector: 'jhi-todo-detail',
    templateUrl: './todo-detail.component.html'
})
export class TodoDetailComponent implements OnInit {
    todo: ITodo;

    constructor(private route: ActivatedRoute) {}

    ngOnInit() {
        this.route.data.subscribe(({ todo }) => {
            this.todo = todo.body ? todo.body : todo;
        });
    }

    previousState() {
        window.history.back();
    }
}
