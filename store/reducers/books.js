import { BOOKS } from "../../data/books";
import { MODULES } from "../../data/modules";
import { TOGGLE_FAVORITE, SET_FILTERS } from "../actions/books";

const initialState = {
    books: BOOKS,
    filteredBooks: BOOKS,
    modules: MODULES,
    favoriteModules: [],
}

const booksReducer = (state = initialState, action) => {
    switch (action.type) {
        case TOGGLE_FAVORITE: {
            const existingIndex = state.favoriteModules.findIndex(module => module.id === action.moduleId);
            if (existingIndex >= 0) {
                const updatedFavModules = [...state.favoriteModules];
                updatedFavModules.splice(existingIndex, 1);
                return {...state, favoriteModules: updatedFavModules, favoriteExists: false}
            } else {
                const favModule = state.modules.find(module => module.id === action.moduleId)
                return {...state, favoriteModules: state.favoriteModules.concat(favModule), favoriteExists: true}
            }
        }
        case SET_FILTERS: {
            const appliedFilters = action.filters;
            const updatedFilteredBooks = state.books.filter(book => {
                if (appliedFilters.isHolly && !book.isHolly) {
                    return false
                }
                if (appliedFilters.isScholarly && !book.isScholarly) {
                    return false
                }
                return true;
            })
            return {...state, filteredBooks: updatedFilteredBooks}
        }
        default:
            return state; 
    }
}

export default booksReducer;