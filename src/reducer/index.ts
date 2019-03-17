import { combineReducers } from "redux";
import { books } from "./books";
import { IBooksReduxStore } from "../type";

export const rootReducer = combineReducers<IBooksReduxStore>({ books });