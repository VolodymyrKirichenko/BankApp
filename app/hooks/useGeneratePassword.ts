import { useContext } from 'react';
import { GeneratePasswordContext } from '../providers/GeneratePasswordProvider';

export const useGeneratePassword = () => useContext(GeneratePasswordContext);
