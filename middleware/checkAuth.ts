export default function (ctx: any) {
  const auth: boolean = !!ctx.store.state.user.user;
  const route: string = ctx.route ? ctx.route.name : '';
  const protectedRoute: boolean = ['checkout-payment_method', 'checkout-delivery_address', 'checkout-confirmation'].includes(route);

  if (route === 'checkout-auth' && auth) ctx.redirect('/checkout/payment_method');
  if (protectedRoute && !auth) ctx.redirect('/checkout/auth');
}
