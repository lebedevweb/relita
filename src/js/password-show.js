let pasButton = document.querySelector('.login_input_show_button');

setListener(pasButton,'click',showPassword)

function showPassword () {
  let password = document.getElementById('password');

  if (pasButton.classList.contains('active')) {
    password.setAttribute('type', 'password')
    removeClass(pasButton, 'active')
  } else {
    password.setAttribute('type', 'text')
    addClass(pasButton, 'active')
  }
}
