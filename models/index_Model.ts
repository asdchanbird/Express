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
        var mysql = require('mysql2');
        var connection = mysql.createConnection({
        host     : 'localhost',
        user     : 'root',
        password : 'root',
        database : 'tripgo' 
        });

        connection.connect();
        let data: any;
        return new Promise<void>((resolve, reject) => {
            connection.query('SELECT * FROM member', function(err: any, rows: any, fields: any) {
                if (err) throw err;
                console.log('The solution is: ', rows);
                data = rows
                console.log(data)
                resolve(rows)
            });
            connection.end();
            
        })
    },
    Get: (id: any) => {
        return Todos[id]
    }
}
