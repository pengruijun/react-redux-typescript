import { combineReducers } from "redux";
import { books } from "./books";
import { selectedId } from "./selectedId";
import { IBooksReduxStore } from "../type";

export const rootReducer = combineReducers<IBooksReduxStore>({ books, selectedId });