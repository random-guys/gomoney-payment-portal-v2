export default function ({ store, route, redirect, from }) {
  // if (route.path === '/claim') {
  //   redirect('/')
  // }

  switch (from?.path) {
    case '/verify-link':
      redirect(from?.path)
      break
    case '/payment/redeem-successful' || '/payment/redeem-gomoney-successful':
      redirect(from?.path)
      break
  }

  switch (route.path) {
    case '/claim':
      redirect('/')
      break
    case '/':
      break
    case '/verify-link':
      break
    case '/payment/passcode':
      if (!store.state.hashLink) redirect('/')
      break
    default:
      if (store.state.passcode.length < 6) {
        redirect('/payment/passcode')
      }
  }

  // if (
  //   !store.state.hashLink &&
  //   route.path !== '/' &&
  //   route.path !== '/verify-link'
  // ) {
  //   redirect('/')
  // }

  // if (
  //   store.state.passcode.length < 6 &&
  //   route.path !== '/' &&
  //   route.path !== '/payment/passcode' &&
  //   route.path !== '/verify-link'
  // ) {
  //   redirect('/payment/passcode')
  // }
}
