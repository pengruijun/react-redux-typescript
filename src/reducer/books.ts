import { IBooksReduxStore, IBook } from "../type";

export const books = (state: IBook[] = [], action: any) =>  {
    if(action.type == "ADD"){
        let book = action.book;
        book.id = state.length;
        return [...state, book];
    }
    
    return state;
   
}