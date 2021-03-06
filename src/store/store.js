import React, { createContext, useReducer } from "react";

const initialState = {
  user: null,
  photos: [],
  loading: true,
  showModal: { name: null, show: false },
  showAddModal: false,
  showDeleteModal: false,
  showImageModal: false,
  query: "",
  resetSearch: false,
};

const store = createContext(initialState);
const { Provider } = store;

const StateProvider = ({ children }) => {
  const [state, dispatch] = useReducer((state, action) => {
    switch (action.type) {
      case "SET_USER":
        return { ...state, user: action.value };
      case "SET_LOADING":
        return { ...state, loading: action.value };
      case "SET_SHOW_MODAL":
        return { ...state, showModal: action.value };
      case "SET_QUERY":
        return { ...state, query: action.value };
      case "SET_RESET_SEARCH":
        return { ...state, resetSearch: true };
      default:
        throw new Error("This action doest not exists");
    }
  }, initialState);

  return <Provider value={{ state, dispatch }}>{children}</Provider>;
};

export { store, StateProvider };
