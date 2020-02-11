import PageIndex from './pages/Index'
import MessageRandom from './pages/MessageRandom'
import Donate from './pages/Donate'
import lexicon from './pages/lexicon'

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
  },
  {
    path: '/lexicon',
    component: lexicon
  }
]
