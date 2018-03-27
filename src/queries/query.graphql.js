export const getAllBooks = `{books{id title author}}`;
export const createBook = `mutation createBookMethod($id: Int!, $title: String!, $author: String!) {
    createBook(id: $id, title: $title, author: $author) { title }
}`;

export const deleteBook = `mutation deleteBookMethod($id: Int!) {
    deleteBook(id: $id)
}`;