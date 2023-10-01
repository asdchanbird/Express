// 過更改導入樣式來修復它
import * as express from 'express';
import { TodoController } from '../controllers/index_Controller'
import apps  from '../routers/MemberRouter'
import App from 'next/app';
const app = express(); 

const port = 8080;   //  指定一個 port 給這個 app   
// 路由中间件
app.use(apps)


app.get('/', async(req, res) => {
    console.log(99,await TodoController.GetAll())
    res.send(await TodoController.GetAll())
    // res.send('Hello World12321!');  // 設定 response
})
app.get('/todo/:id', (req, res) => { 
    res.send(TodoController.Get(req.params.id))
})
// app
// .get('/Member', (req, res )=> {
//     res.send('收到Member')
// })
app.listen(port, () => {    //  加上一個監聽器來監聽這個 port
    console.log(`Example app listening at http://localhost:${port}`)
})