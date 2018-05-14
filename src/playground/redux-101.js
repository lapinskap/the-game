import { createStore } from 'redux';
//Action is an object

const add = ({ a, b }, c ) => {
    return a + b + c;
};

console.log(add({ a: 1, b: 5 }, 1000 ));

// Action generators - functions that return action objects

const incrementCount = ({ incrementBy = 1 } = {}) => ({
    type: 'INCREMENT',
    incrementBy
  });
  
  const decrementCount = ({ decrementBy = 1 } = {}) => ({
    type: 'DECREMENT',
    decrementBy
  });
  
  const setCount = ({ count }) => ({
    type: 'SET',
    count
  });
  
  const resetCount = () => ({
    type: 'RESET'
  });
  
  const store = createStore((state = { count: 0 }, action) => {
    switch (action.type) {
      case 'INCREMENT':
        return {
          count: state.count + action.incrementBy
        };
      case 'DECREMENT':
        return {
          count: state.count - action.decrementBy
        };
      case 'SET':
        return {
          count: action.count
        };
      case 'RESET':
        return {
          count: 0
        };
      default:
        return state;
    }
  });
  
  const unsubscribe = store.subscribe(() => {
    console.log(store.getState());
  });
  
  store.dispatch(incrementCount({ incrementBy: 5 }))
  
  store.dispatch(incrementCount());
  
  store.dispatch(resetCount());
  
  store.dispatch(decrementCount());
  
  store.dispatch(decrementCount({ decrementBy: 10 }));
  
  store.dispatch(setCount({ count: -100 }));
  

store.dispatch({
    type: 'RESET'
});

store.dispatch({
    type: 'DECREMENT'
});

store.dispatch({
    type: 'SET',
    count: 101
});


// const incrementCount = (payload = {}) => ({
//     type: 'INCREMENT',
//     incrementBy: typeof payload.incrementBy === 'number' ? payload.incrementBy : 1
// });
