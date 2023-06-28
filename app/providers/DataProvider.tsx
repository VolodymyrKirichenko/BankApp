import {
  createContext,
  Dispatch,
  FC,
  ReactNode,
  SetStateAction,
  useMemo,
  useState
} from 'react'
import { ActiveStories } from '../typedefs/typedefs'

interface IContext {
  activeStories: ActiveStories | null
  setActiveStories: Dispatch<SetStateAction<any>>
}

export const DataContext = createContext<IContext>({} as IContext)

export const DataProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [activeStories, setActiveStories] = useState<string[] | null>(null)

  const value = useMemo(() => ({
    activeStories, setActiveStories
  }), [activeStories])

  return (
    <DataContext.Provider value={value as IContext}>
      {children}
    </DataContext.Provider>
  )
}
