export default store => next => action => {
    console.log('>>state BEFORE<<', store.getState())
    console.log('>>logger<<', 'dispatching', action)

    const randomId = Math.random().toString(36).substring(2);
    console.log('generateId', randomId)

    next(action)
    console.log('>>state AFTER<<', store.getState())
}