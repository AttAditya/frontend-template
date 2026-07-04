import { useCallback, useContext, useEffect, useState } from "preact/hooks";
import { ComponentChildren, createContext } from "preact";

interface ExampleMeta {
  ready: boolean;
}

interface ProviderProps {
  children: ComponentChildren;
}

const ExampleContext = createContext<ExampleMeta | null>(null);

export function ExampleProvider({ children }: ProviderProps) {
  const [ready, setReady] = useState(false);

  const load = useCallback(async () => {
    setReady(true);
  }, []);

  useEffect(() => {
    load();
  }, []);

  const value = {
    ready,
  };

  return <ExampleContext.Provider value={value}>
    {children}
  </ExampleContext.Provider>
}

export function useExample(): ExampleMeta {
  return useContext(ExampleContext)!;
}

