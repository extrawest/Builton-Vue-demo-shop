export default function ({ store, redirect }) {
  if (!store.state.user) redirect('/checkout/payment_method')
}
