import {normalizedArticles as defaultArticles} from '../fixtures'
import {arrToMap} from "../helpers";
import {DELETE_ARTICLE} from "../constants";

export default (articleState = arrToMap(defaultArticles), action ) => {
    const {type, payload} = action

    switch (type){
        case DELETE_ARTICLE:
            const tmpState = {...articleState}
            delete tmpState[payload.id]
            return tmpState
    }

    return articleState
}