import PageIndex from './pages/Index'
import MessageRandom from './pages/MessageRandom'
import Donate from './pages/Donate'
import lexicon from './pages/lexicon'
import links from './pages/links'

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
  },
  {
    path: '/links',
    component: links
  }
]
