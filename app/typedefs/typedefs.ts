import { AntDesign, MaterialIcons } from '@expo/vector-icons'
import { TypeRootStackParamList } from '../navigation/types'
import { KeyboardTypeOptions } from 'react-native'

export type TypeName = 'Mono Black' | 'Mono White'
export type TypeCurrency = 'UAH' | 'USD' | 'EUR' | 'PLN'

export interface IStory {
  _id: string
  heading: string
  images: string[]
}

export interface IData {
  email: string
  password: string
}

export interface IAvatar {
  name?: string | null
  size: 'small' | 'large'
  icon?: string
  onChangeAvatar?: (uri: string | undefined) => void
}

export interface IButton {
  onPress: () => void
  title: string
  colors?: [string, string]
}

export interface IField {
  onChange?: (val: string) => void
  val?: string
  placeholder: string
  isSecure?: boolean
  keyboardType?: KeyboardTypeOptions | undefined
  onChangeSecure?: () => void
}

export interface IProfile {
  _id: string
  displayName: string
  docId: string
  avatar: string
}

export interface ActiveStories {
  _id: string
  heading: string
  images: string[]
}

export interface IAccount {
  _id: string
  userId: string
  balance: number
  cardNumber: string
  currency: TypeCurrency
  name: TypeName
}

export interface IButtons {
  text: string
  resolveValue: string
  textSecond: string
  resolveValueSecond: string
}

export interface IAsyncAlert {
  title: string
  message?: string
  buttons: IButtons
}

export interface IFooterItem {
  iconName: keyof typeof AntDesign.glyphMap
  title: keyof TypeRootStackParamList
}

export interface Avatar {
  id: number
  avatar: string
}

export interface IContact {
  _id: string
  displayName: string
  cardNumber: string
  avatar: string
}

export interface PasswordsType {
  isCondition: boolean
  condition: string
  handleChange: () => void
}

export interface IService {
  iconName: keyof typeof MaterialIcons.glyphMap
  title: string
  percent: number
}

export interface IMessage {
  _id: string
  text: string
  userId: string
  timestamp: any
}

export interface IMoreItem {
  title: string
  description: string
  iconName: keyof typeof MaterialIcons.glyphMap
  link: string
}

export interface Base {
  currencyCodeA: number
  currencyCodeB: number
  date: number
  rateBuy: number
  rateCross: number
  rateSell: number
}

export interface Rates {
  USD: number
  EUR: number
  PLN: number
  UAH: number
}

export interface IOtherItem extends Pick<IFooterItem, 'iconName'> {
  title: string
}

export interface IIcon extends Pick<IFooterItem, 'iconName'> {}
