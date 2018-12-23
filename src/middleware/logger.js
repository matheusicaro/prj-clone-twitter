const logger = (store) => (next) => (action) => {
    
    console.group(action.type);
        console.log('The action: ', action );
        const returnValue = next(action);   // << Atualiza o estado
        console.log('The new state: ', store.getStore());
    console.groupEnd();

    return returnValue;
}

export default logger;