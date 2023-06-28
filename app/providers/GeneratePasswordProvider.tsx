import {
  createContext,
  FC,
  ReactNode,
  useCallback,
  useMemo,
  useState
} from 'react'
import { generatePassword } from '../utils/generatePassword'
import { useTimer } from '../hooks/useTimer'

export interface IContext {
  password: string
  isClicked: boolean
  isNumbers: boolean
  isUpperLetters: boolean
  isLowerLetters: boolean
  isSpecialChars: boolean
  isModalVisible: boolean
  createNewPassword: () => void
  handleChangeNumbersInput: () => void
  handleChangeUpperInput: () => void
  handleChangeLowerInput: () => void
  handleChangeModalVisible: (v?: boolean) => void
  handleChangeSpecialCharsInput: () => void
}

export const GeneratePasswordContext = createContext<IContext>({} as IContext)

export const GeneratePasswordProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [isModalVisible, setIsModalVisible] = useState(false)
  const [isUpperLetters, setIsUpperLetters] = useState(true)
  const [isLowerLetters, setIsLowerLetters] = useState(true)
  const [isSpecialChars, setIsSpecialChars] = useState(true)
  const [isNumbers, setIsNumbers] = useState(true)
  const [password, setPassword] = useState('')
  const [isClicked, setIsClicked] = useState(false)

  const delay = 1000
  useTimer({ isClicked, setIsClicked, delay })

  const createNewPassword = useCallback(() => {
    const generate = generatePassword(10, isUpperLetters, isLowerLetters, isNumbers, isSpecialChars)

    setPassword(generate)
  }, [isUpperLetters, isLowerLetters, isSpecialChars, isNumbers])

  const handleChangeModalVisible = useCallback((confirm: boolean = false) => {
    setIsModalVisible((prevState) => !prevState)

    if (confirm) {
      setIsClicked(true)
    }
  }, [])

  const handleChangeUpperInput = useCallback(() => {
    setIsUpperLetters((prevState) => !prevState)
  }, [isUpperLetters])

  const handleChangeLowerInput = useCallback(() => {
    setIsLowerLetters((prevState) => !prevState)
  }, [isLowerLetters])

  const handleChangeSpecialCharsInput = useCallback(() => {
    setIsSpecialChars(prevState => !prevState)
  }, [isSpecialChars])

  const handleChangeNumbersInput = useCallback(() => {
    setIsNumbers(prevState => !prevState)
  }, [isNumbers])

  const value = useMemo(() => ({
    password,
    isNumbers,
    isClicked,
    isUpperLetters,
    isLowerLetters,
    isSpecialChars,
    isModalVisible,
    createNewPassword,
    handleChangeUpperInput,
    handleChangeLowerInput,
    handleChangeModalVisible,
    handleChangeNumbersInput,
    handleChangeSpecialCharsInput
  }), [
    password,
    isNumbers,
    isClicked,
    isUpperLetters,
    isLowerLetters,
    isSpecialChars,
    isModalVisible
  ])

  return (
    <GeneratePasswordContext.Provider value={value}>
      {children}
    </GeneratePasswordContext.Provider>
  )
}
