import { useTypedSelector } from './useTypedSelector';

export const useUser = () => {
  const { user, isAuth } = useTypedSelector(state => state.userReducer)
  
  return  { user, isAuth };
}