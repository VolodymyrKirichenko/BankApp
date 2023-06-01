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
