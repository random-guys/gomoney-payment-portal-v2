export default function ({ store, route, redirect, from }) {
  if (route.path === '/claim' || route.path === '/') {
    redirect('/')
  }

  if (from?.path === '/payment/redeem-successful') {
    window.stop()
    window.open('https://gomoney.global', '_self')
  } else if (store.state.link.length < 10) redirect('/')
}
