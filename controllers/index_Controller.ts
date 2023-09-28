import { TodoModel } from "../models/index_Model";

export const TodoController = {
    GetAll: () => {
        const data = TodoModel.GetAll()
        return data
    },
    Get: (query: any) => {
        const data = TodoModel.Get(query)
        return data
    }
}