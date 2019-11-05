export default function (ctx: any) {
  if (ctx.store.state.userEmail) ctx.redirect('/checkout/payment_method')
}
