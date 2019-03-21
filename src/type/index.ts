export interface IBook {
    id: number,
    title: string,
    author: string,
    price: number,
}

export interface IBooksReduxStore {
    books: IBook[];
    selectedId: number
}
