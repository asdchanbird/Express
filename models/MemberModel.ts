var mysql = require('mysql2');
var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'root',
    database : 'tripgo' 
});
connection.connect();
export const MemberModel = {
    GetMember: () => {
        return new Promise<void>((resolve, reject) => {
            connection.query('SELECT * FROM member', function(err: any, rows: any, fields: any) {
                if (err) throw err;
                console.log('The solution is: ', rows);
                resolve(rows)
            });
        })
    },
    GetMemberId: (id: any) => {
        return new Promise<void>((resolve, reject) => {
            connection.query('SELECT * FROM member', function(err: any, rows: any, fields: any) {
                if (err) throw err;
                console.log('The solution is: ', rows);
                resolve(rows)
            });
        })
    }
}