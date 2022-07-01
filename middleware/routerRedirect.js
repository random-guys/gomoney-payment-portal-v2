export default function ({ store, route, redirect, from }) {
  if (route.path === '/claim') {
    redirect('/')
  }

  if (
    from?.path === '/payment/redeem-successful' ||
    from?.path === '/payment/redeem-gomoney-successful'
  ) {
    window.stop()
    window.open('https://gomoney.global', '_self')
  }
  if (
    store.state.link.length < 10 &&
    route.path !== '/' &&
    route.path !== '/link-error'
  ) {
    redirect(from?.path)
  }
  if (
    store.state.passcode.length < 6 &&
    route.path !== '/' &&
    route.path !== '/payment/passcode' &&
    route.path !== '/link-error'
  ) {
    redirect('/payment/passcode')
  }
}
