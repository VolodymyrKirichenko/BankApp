import { Alert } from 'react-native';
import {
  collection,
  doc,
  getDoc,
  getDocs,
  limit,
  query,
  updateDoc,
  where
} from '@firebase/firestore';
import { db } from '../../../utils/firebase';
import { IAccount } from '../../../typedefs/typedefs';

import { convertCurrency } from '../../../utils/convertCurrency';

export const handleTransfer = async (fromAccount: IAccount, cardNumber: string, transferAmount: string) => {
  try {
    let accountToId = '';
    let currentToBalance = '';
    let accountFromCurrency = fromAccount.currency;
    let convertAmount = '';

    const querySnapshot = await getDocs(
      query(collection(db, 'accounts'), where('cardNumber', '==', cardNumber), limit(1))
    );

    querySnapshot.docs.forEach((doc) => {
      accountToId = doc.id;
    });

    const docRefTo = doc(db, 'accounts', accountToId);
    const docSnapTo = await getDoc(docRefTo);

    if (docSnapTo.exists()) {
      currentToBalance = docSnapTo.data().balance;
      const accountToCurrency = docSnapTo.data().currency;

      if (accountFromCurrency !== accountToCurrency) {
        const convertedAmount = convertCurrency(Number(transferAmount), accountFromCurrency, accountToCurrency);
        convertAmount = convertedAmount.toString();
      }
    } else {
      Alert.alert('The card where you are sending money was not found');
      return;
    }

    await updateDoc(docRefTo, {
      balance: currentToBalance + Number(convertAmount),
    });

    const docRefFrom = doc(db, 'accounts', fromAccount._id);

    await updateDoc(docRefFrom, {
      balance: fromAccount.balance - Number(transferAmount),
    });

    return;
  } catch (error: any) {
    Alert.alert('Error transfer', error.message);
  }
};


