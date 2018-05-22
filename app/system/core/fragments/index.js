
export default {
  'page-home': () => { return import(/* webpackChunkName: "page-home" */ 'page-home') }, 
'page-speakers': () => { return import(/* webpackChunkName: "page-speakers" */ 'page-speakers') }, 
'page-schedule': () => { return import(/* webpackChunkName: "page-schedule" */ 'page-schedule') }, 
'page-sessions': () => { return import(/* webpackChunkName: "page-sessions" */ 'page-sessions') }, 
'page-sponsor': () => { return import(/* webpackChunkName: "page-sponsor" */ 'page-sponsor') }, 
'page-tickets': () => { return import(/* webpackChunkName: "page-tickets" */ 'page-tickets') }, 
'page-about': () => { return import(/* webpackChunkName: "page-about" */ 'page-about') }, 
'page-faq': () => { return import(/* webpackChunkName: "page-faq" */ 'page-faq') }, 
'page-convince': () => { return import(/* webpackChunkName: "page-convince" */ 'page-convince') }, 
'page-not-authorized': () => { return import(/* webpackChunkName: "page-not-authorized" */ 'page-not-authorized') }, 
'page-not-found': () => { return import(/* webpackChunkName: "page-not-found" */ 'page-not-found') }
}
  