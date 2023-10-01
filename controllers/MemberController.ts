// import {  } from "../models";
import { MemberModel }  from '../models/MemberModel'
export const MemberController = {
    GetMember: async() => {
        // console.log( await MemberModel.GetMember())
        return await MemberModel.GetMember()
    },
    GetMemberId: () => {
        return '收到MemberId123'
    },
    GetMemberName: () => {
        return '收到MemberName123'
    },
}