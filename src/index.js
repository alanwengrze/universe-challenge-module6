import {Router} from './router.js'
const router = new Router()
router.add("/", "/pages/home.html")
router.add("/universe", "/pages/universe.html")
router.add("/explore", "/pages/explore.html")
router.add(404, "/pages/404.html")


  router.handle()

  window.onpopstate = ()=> router.handle()
  window.route = ()=> router.route()
  export function bg(){
    const {pathname} = window.location
    
    if(pathname == "/"){
      document.documentElement.classList.add("home")
      document.documentElement.classList.remove("explore")
      document.documentElement.classList.remove("universe")
      
    }else if(pathname == "/universe"){
      document.documentElement.classList.add("universe")
      document.documentElement.classList.remove("explore")
      document.documentElement.classList.remove("home")
      
    }else if(pathname == "/explore"){
      document.documentElement.classList.add("explore")
      document.documentElement.classList.remove("home")
      document.documentElement.classList.remove("universe")
      
    }
  }
  
