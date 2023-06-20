import { FC } from 'react';
import { Layout } from '../../layout/Layout';
import { Contacts } from './contacts/Contacts';
import { Other } from './other/Other';

export const Payments: FC = () => {
  return (
    <Layout>
      <Contacts />

      <Other />
    </Layout>
  )
}
