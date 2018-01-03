
export default {
  'page-home': () => { return import(/* webpackChunkName: "page-home" */ 'page-home') }, 
'page-not-authorized': () => { return import(/* webpackChunkName: "page-not-authorized" */ 'page-not-authorized') }, 
'page-not-found': () => { return import(/* webpackChunkName: "page-not-found" */ 'page-not-found') }
}
  