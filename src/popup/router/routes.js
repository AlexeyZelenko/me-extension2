import PageIndex from './pages/Index'
import MessageRandom from './pages/MessageRandom'
import Donate from './pages/Donate'

export default [
  {
    path: '/',
    component: PageIndex
  },
  {
    path: '/MessageRandom',
    component: MessageRandom
  },
  {
    path: '/Donate',
    component: Donate
  }
]
