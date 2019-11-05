export default function ({ store, redirect }) {
  if (store.state.userEmail) redirect('/checkout/payment_method')
}
