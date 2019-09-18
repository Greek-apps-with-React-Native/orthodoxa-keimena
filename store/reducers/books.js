import { BOOKS } from "../../data/books";
import { MODULES } from "../../data/modules";
import { TOGGLE_FAVORITE } from "../actions/books";

const initialState = {
    books: BOOKS,
    filteredBooks: BOOKS,
    modules: MODULES,
    favoriteModules: []
}

const booksReducer = (state = initialState, action) => {
    switch (action.type) {
        case TOGGLE_FAVORITE: {
            const existingIndex = state.favoriteModules.findIndex(module => module.id === action.moduleId);
            if (existingIndex >= 0) {
                const updatedFavModules = [...state.favoriteModules];
                updatedFavModules.splice(existingIndex, 1);
                return {...state, favoriteModules: updatedFavModules}
            } else {
                const favModule = state.modules.find(module => module.id === action.moduleId)
                return {...state, favoriteModules: state.favoriteModules.concat(favModule)}
            }
        }
            
    
        default:
            return state; 
    }
}

export default booksReducer;