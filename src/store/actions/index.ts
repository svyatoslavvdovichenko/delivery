import { createDelivery, getDeliveries } from './deliveryActions';
import { setError, closeError } from './errorActions';
import { onLogIn, onLogOut, onSignUp, setUser } from './userActions';

export default {
  setError,
  closeError,
  onLogIn,
  onLogOut,
  onSignUp,
  setUser,
  getDeliveries,
  createDelivery,
}