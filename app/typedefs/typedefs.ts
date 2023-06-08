import { AntDesign } from '@expo/vector-icons';
import { TypeRootStackParamList } from '../navigation/types';

export type TypeName = 'Mono Black' | 'Mono White'
export type TypeCurrency = 'UAH' | 'USD'

export interface IStory {
  _id: string,
  heading: string,
  images: string[]
}

export interface IData {
  email: string,
  password: string,
}

export interface IAvatar {
  name?: string | null,
  size: 'small' | 'large',
}

export interface IButton {
  onPress: () => void,
  title: string,
  colors?: [string, string],
}

export interface IField {
  onChange: (val: string) => void
  val: string
  placeholder: string
  isSecure?: boolean
}

export interface IProfile {
  _id: string,
  displayName: string,
  docId: string
}

export interface ActiveStories {
  _id: string,
  heading: string,
  images: string[],
}

export interface IAccount {
  _id: string,
  userId: string,
  balance: number,
  cardNumber: string,
  currency: TypeCurrency
  name: TypeName
}

export interface IButtons {
  text: string,
  resolveValue: string,
  textSecond: string,
  resolveValueSecond: string,
}

export interface IAsyncAlert {
  title: string,
  message?: string,
  buttons: IButtons,
}

export interface IFooterItem {
  iconName: keyof typeof AntDesign.glyphMap,
  title: keyof TypeRootStackParamList,
}

export interface IContact {
  _id: string,
  displayName: string,
  cardNumber: string,
}

export interface IOtherItem extends Pick<IFooterItem, 'iconName'> {
  title: string,
}

export interface IIcon extends Pick<IFooterItem, 'iconName'> {}
