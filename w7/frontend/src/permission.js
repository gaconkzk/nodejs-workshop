import router from './router'
import NProgress from 'nprogress'

// import { getToken } from '@/utils/auth'
// import { getPageTitle } from '@/utils/get-page-title'

NProgress.configure({ showSpinner: false })

const whiteList = ['/login', '/dashboard', '/splash', '/register']

router.beforeEach(async (to, from, next) => {
  NProgress.start()

  if (whiteList.indexOf(to.path) !== -1) {
    next()
  } else {
    next(`/splash?redirect=${to.path}`)
    NProgress.done() // need this?
  }
})

router.afterEach(() => {
  NProgress.render()
})
