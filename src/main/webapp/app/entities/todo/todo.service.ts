import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import * as moment from 'moment';

import { SERVER_API_URL } from 'app/app.constants';
import { createRequestOption } from 'app/shared';
import { ITodo } from 'app/shared/model/todo.model';

type EntityResponseType = HttpResponse<ITodo>;
type EntityArrayResponseType = HttpResponse<ITodo[]>;

@Injectable()
export class TodoService {
    private resourceUrl = SERVER_API_URL + 'api/todos';

    constructor(private http: HttpClient) {}

    create(todo: ITodo): Observable<EntityResponseType> {
        const copy = this.convertDateFromClient(todo);
        return this.http
            .post<ITodo>(this.resourceUrl, copy, { observe: 'response' })
            .map((res: EntityResponseType) => this.convertDateFromServer(res));
    }

    update(todo: ITodo): Observable<EntityResponseType> {
        const copy = this.convertDateFromClient(todo);
        return this.http
            .put<ITodo>(this.resourceUrl, copy, { observe: 'response' })
            .map((res: EntityResponseType) => this.convertDateFromServer(res));
    }

    find(id: number): Observable<EntityResponseType> {
        return this.http
            .get<ITodo>(`${this.resourceUrl}/${id}`, { observe: 'response' })
            .map((res: EntityResponseType) => this.convertDateFromServer(res));
    }

    query(req?: any): Observable<EntityArrayResponseType> {
        const options = createRequestOption(req);
        return this.http
            .get<ITodo[]>(this.resourceUrl, { params: options, observe: 'response' })
            .map((res: EntityArrayResponseType) => this.convertDateArrayFromServer(res));
    }

    delete(id: number): Observable<HttpResponse<any>> {
        return this.http.delete<any>(`${this.resourceUrl}/${id}`, { observe: 'response' });
    }

    private convertDateFromClient(todo: ITodo): ITodo {
        const copy: ITodo = Object.assign({}, todo, {
            dueDate: todo.dueDate != null && todo.dueDate.isValid() ? todo.dueDate.toJSON() : null
        });
        return copy;
    }

    private convertDateFromServer(res: EntityResponseType): EntityResponseType {
        res.body.dueDate = res.body.dueDate != null ? moment(res.body.dueDate) : null;
        return res;
    }

    private convertDateArrayFromServer(res: EntityArrayResponseType): EntityArrayResponseType {
        res.body.forEach((todo: ITodo) => {
            todo.dueDate = todo.dueDate != null ? moment(todo.dueDate) : null;
        });
        return res;
    }
}
