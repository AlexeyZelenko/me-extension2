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
    name: MessageRandom,
    component: () => import(/* webpackChunkName: "about" */ './pages/MessageRandom')
  },
  {
    path: '/Donate',
    name: Donate,
    component: () => import(/* webpackChunkName: "about" */ './pages/Donate')
  },
  {
    path: '/lexicon',
    name: lexicon,
    component: () => import(/* webpackChunkName: "about" */ './pages/lexicon')
  },
  {
    path: '/links',
    name: links,
    component: () => import(/* webpackChunkName: "about" */ './pages/links')
  }
]
