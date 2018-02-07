export default store => next => action => {
    console.log('>>state BEFORE<<', store.getState())
    console.log('>>logger<<', 'dispatching', action)
    next(action)
    console.log('>>state AFTER<<', store.getState())
}