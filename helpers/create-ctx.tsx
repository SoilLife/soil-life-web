import { createContext, useReducer } from 'react';

export function createCtx<S, A>(reducer: (state: S, action: A) => Readonly<S>, defaultValue: S) {
  type DispatchType = React.Dispatch<A>;
  const defaultUpdate: DispatchType = () => defaultValue;
  const ctx = createContext({
    state: defaultValue,
    dispatch: defaultUpdate,
  });
  function Provider(props: React.PropsWithChildren<{}>) {
    const [state, dispatch] = useReducer(reducer, defaultValue);
    return <ctx.Provider value={{ state, dispatch }} {...props} />;
  }
  return [ctx, Provider] as const; // alternatively, [typeof ctx, typeof Provider]
}
