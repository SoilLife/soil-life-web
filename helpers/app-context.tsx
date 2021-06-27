import { useContext, createContext, useState } from 'react';

export function createCtx<A>(defaultValue: A) {
  type UpdateType = React.Dispatch<React.SetStateAction<typeof defaultValue>>;
  const defaultUpdate: UpdateType = () => defaultValue;
  const ctx = createContext({
    state: defaultValue,
    update: defaultUpdate,
  });
  function Provider(props: React.PropsWithChildren<{}>) {
    const [state, update] = useState(defaultValue);
    return <ctx.Provider value={{ state, update }} {...props} />;
  }
  return [ctx, Provider] as const; // alternatively, [typeof ctx, typeof Provider]
}

const initialState: any = null;

export const [ctx, AppProvider] = createCtx(initialState);

export function useAppContext() {
  const { state: fullpage, update: setFullPage } = useContext(ctx);
  return {
    fullpage,
    setFullPage,
  };
}
