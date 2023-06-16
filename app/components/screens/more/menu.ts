import { IMoreItem } from '../../../typedefs/typedefs';

const url = 'https://www.monobank.ua';

export const menu: IMoreItem[] = [
  {
    title: 'Our site',
    description: 'Search official monobank site',
    iconName: 'account-balance',
    link: `${url}`,
  },
  {
    title: 'Ordering certificates',
    description: 'Account statements by e-mail and in paper form',
    iconName: 'find-in-page',
    link: `${url}`,
  },
  {
    title: 'For business',
    description: 'Online banking for small business',
    iconName: 'business',
    link: `${url}/military-bonds`,
  },
  {
    title: 'International transfers',
    description: 'Transfer cash to another country',
    iconName: 'send-to-mobile',
    link: `${url}/international`,
  },
  {
    title: 'Deposits',
    description: 'Make a deposit',
    iconName: 'wallet-travel',
    link: `${url}/deposit`,
  },
  {
    title: 'About us',
    description: 'A little about us and how to contact us',
    iconName: 'people',
    link: `${url}/fop`,
  },
]
