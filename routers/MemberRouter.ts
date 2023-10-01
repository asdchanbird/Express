import * as express from 'express';
import { MemberController }  from '../controllers/MemberController'
// import {  } from "../c";
const app = express();
// 路由器
export default app
    .get('/Member', async(req, res )=> {
        res.send(await MemberController.GetMember())
    })
    .get('/MemberId', (req, res )=> {
        res.send(MemberController.GetMemberId())
    })
    .get('/MemberName', (req, res )=> {
        res.send(MemberController.GetMemberName())
    })
