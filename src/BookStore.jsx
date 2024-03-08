import Book from './Book';
export default function BooksStore({books}){
    return (
        <div>
            <h3>
                Books : {books.length}
                {
                  books.map(book => <Book book={book}></Book>)
                }
            </h3>
        </div>
    )
}