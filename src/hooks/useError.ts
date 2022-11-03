import { useTypedSelector } from './useTypedSelector';

export const useError = () => {
  const { isOpenError, message } = useTypedSelector(state => state.errorReducer)
  
  return { isOpenError, message };
}