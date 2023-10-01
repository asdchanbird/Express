import { TodoModel } from "../models/index_Model";

export const TodoController = {
    GetAll: async() => {
        const data = await TodoModel.GetAll()
        console.log(data,9898)
        return data
    },
    Get: (query: any) => {
        const data = TodoModel.Get(query)
        return data
    }
}