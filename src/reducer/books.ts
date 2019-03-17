import { IBooksReduxStore, IBook } from "../type";

export const books = (state: IBook[] = [], action: any) =>  {
    if(action.type == "ADD"){
        return [...state, action.book];
    }
    
    return state;
   
}