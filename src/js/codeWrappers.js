function setListener(element, type, handler) {
  if (element) {
    element.addEventListener(type, handler)
  } else {
    return
  }
}

function removeClass(element, value) {
  if (element) {
    element.classList.remove(value)
  } else {
    return
  }
}

function addClass(element, value) {
  if (element) {
    element.classList.add(value)
  } else {
    return
  }
}
