import { INCREMENT, DELETE_ARTICLE, EDIT_FILTER} from "../constants";

export function increment(){
    return {
        type: INCREMENT
    }
}

export function deleteArticle(id){
    return {
        type: DELETE_ARTICLE,
        payload: { id }
    }
}

export function editFilter(filter){
    return {
        type: EDIT_FILTER,
        payload: { filter }
    }
}