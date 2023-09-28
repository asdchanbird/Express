const Todos = [
    {
        "Id": 'first todo',
    },
    {
        "Id": 'second todo',
    },
    {
        "Id": 'third todo',
    },
];

export const TodoModel = {
    GetAll: () => {
        return Todos
    },
    Get: (id: any) => {
        return Todos[id]
    }
}
