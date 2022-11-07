import { useTypedSelector } from './useTypedSelector';

export const useDeliveries = () => {
  const { deliveries } = useTypedSelector(state => state.deliveriesReducer);

  return { deliveries };
} 