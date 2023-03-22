import Footer from 'components/Footer'
import Header from 'components/Header'
import Router from 'routers/Router'

function Layout() {
  return (
    <>
      <Header />
      <Router />
      <Footer />
    </>
  )
}

export default Layout