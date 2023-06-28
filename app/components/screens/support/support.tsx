import { ScrollView } from 'react-native'
import { Padding } from '../../../components/ui/Padding'
import { Layout } from '../../../components/layout/Layout'
import { Header } from './Header/Header'
import { Message } from './Message/Message'
import { useMessages } from '../../../hooks/useMessages'
import { Field } from './Field/Field'

export const Support = () => {
  const { messages } = useMessages()

  return (
    <Layout isScrollView={false}>
      <Padding>
        <Header />

        <ScrollView style={{ height: '83%' }}>
          {messages.map(msg => (
            <Message key={msg._id} message={msg} />
          ))}
        </ScrollView>

        <Field />
      </Padding>
    </Layout>
  )
}
