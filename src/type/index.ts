export interface IBook {
    title: string,
    author: string,
    price: number,
}

export interface IBooksReduxStore {
    books: IBook[];
}
