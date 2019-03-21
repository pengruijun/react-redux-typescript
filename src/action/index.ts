import { IBook } from "../type";


export const add = (book: IBook): any => ({
        type: "ADD",
        book
    });

export const show = (selectedId: number) => ({
    type: "SELECT",
    selectedId,
});

export const link = () => ({
    type: "LINK",
});