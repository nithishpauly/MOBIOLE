// // store.js

// import { createStore } from 'redux';

// const initialState = {
//   plans: [], // Initial state for the plans array
// };

// const plansReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case 'SET_PLANS':
//       return {
//         ...state,
//         plans: action.payload,
//       };
//     default:
//       return state;
//   }
// };

// const store = createStore(plansReducer);

// export default store;
// store.js
// import { createStore } from 'redux';

// const initialState = {
//   mobileNo: '',
//   mobileNetwork: '',
//   plan: '',
//   amount: '',
// };

// const formReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case 'UPDATE_FORM_DATA':
//       return {
//         ...state,
//         ...action.payload,
//       };
//     default:
//       return state;
//   }
// };

// const store = createStore(formReducer);

// export default store;

