import { Moment } from 'moment';

export interface ITodo {
    id?: number;
    title?: string;
    description?: string;
    dueDate?: Moment;
}

export class Todo implements ITodo {
    constructor(public id?: number, public title?: string, public description?: string, public dueDate?: Moment) {}
}
