import {normalizedArticles as defaultArticles} from '../fixtures'
import {DELETE_ARTICLE} from "../constants";

const defaultArticlesMap = defaultArticles.reduce( (acc, article) => {
    acc[article.id] = article
    return acc
}, {})

export default (articleState = defaultArticlesMap, action ) => {
    const {type, payload} = action

    switch (type){
        case DELETE_ARTICLE:
            const tmpState = {...articleState}
            delete tmpState[payload.id]
            return tmpState
    }

    return articleState
}