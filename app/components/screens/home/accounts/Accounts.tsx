import { View, Text } from 'react-native';
import { FC, Fragment } from 'react';
import { useAccounts } from '../../../../hooks/useAccounts';
import { Padding } from '../../../../components/ui/Padding';
import { Loader } from '../../../../components/ui/Loader';
import { AccountsItem } from './AccountsItem/AccountItem';

export const Accounts: FC = ({ navigation }: any) => {
  const { accounts, isLoading } = useAccounts();

  return (
    <Padding>
      {isLoading ? (
        <Loader />
      ) : accounts.length ? (
        accounts.map((account, index) => (
          <Fragment key={account._id}>
            <AccountsItem account={account} />

            {index + 1 !== accounts.length && (
              <View
                style={{
                  borderBottomColor: '#E0E1E2',
                  borderBottomWidth: 1,
                  marginBottom: 24,
                  marginTop: 24
                }}
              />
            )}
          </Fragment>
        ))
      ) : (
        <Text>You don't have cards</Text>
      )}
    </Padding>
  )
}
