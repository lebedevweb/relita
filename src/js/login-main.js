let login = document.querySelector('.login');

function loginShow() {
  let lscreen = document.querySelector('.login_screen'),
      llink = document.querySelector('.login_link'),
      lcontainer = document.querySelector('.login_container');
  if(login) {
    addClass(lscreen,'active')
    addClass(llink,'active')
    addClass(lcontainer, 'active')
  } else {
    return
  }
}

setTimeout(loginShow, 3000)


