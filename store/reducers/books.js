import { BOOKS } from "../../data/books";
import { MODULES } from "../../data/modules";

const initialState = {
    books: BOOKS,
    filteredBooks: BOOKS,
    modules: MODULES,
    favoriteModules: []
}

const booksReducer = (state = initialState, action) => {
    // switch (key) {
    //     case value:
            
    
    //     default:
    //         return state;
    // }
    return state
}

export default booksReducer;