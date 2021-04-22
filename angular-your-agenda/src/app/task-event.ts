export interface TaskEvent{
    id : number;//Used to identify the task/event
    type : string;//Task or event
    name : string;
    description : string;
    subtasks : any;//Can be empty, string[] when exists
    due_date : any;//Doesn't have to be due, Date object when exists
    category : string;
}