import { createContext, ReactNode, useContext, useReducer } from "react";
import { dataGridReducer } from "./reducer";

const initialDataGridState = {
  hidden: false,
  value: "",
};

const storeContext = createContext<{ hidden: boolean; value: string }>(
  initialDataGridState
);
const dispatchContext = createContext<any>({});

type TDataGridStoreProvider = {
  children: ReactNode;
};

/**
 * The `DataGridStoreProvider` component is a wrapper that provides a state and dispatch context for
 * its children components.
 * @param {TDataGridStoreProvider}  - - `TDataGridStoreProvider`: This is a type parameter that
 * represents the type of the `children` prop in the `DataGridStoreProvider` component. It is used to
 * define the type of the `children` prop in the component's props interface.
 * @returns The `DataGridStoreProvider` component is returning a JSX element. It is wrapping the
 * `children` prop with two context providers: `dispatchContext.Provider` and `storeContext.Provider`.
 * The `dispatchContext.Provider` is providing the `dispatch` function from the `useReducer` hook, and
 * the `storeContext.Provider` is providing the `state` object from the `useReducer` hook
 */
export const DataGridStoreProvider = ({ children }: TDataGridStoreProvider) => {
  const [state, dispatch] = useReducer(dataGridReducer, initialDataGridState);

  return (
    <dispatchContext.Provider value={dispatch}>
      <storeContext.Provider value={state}>{children}</storeContext.Provider>
    </dispatchContext.Provider>
  );
};

export const useDataGridStore = () => {
  return useContext(storeContext);
};

export const useDataGridDispatch = () => {
  return useContext(dispatchContext);
};
