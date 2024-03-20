const setActive = (index) => {
    nav = document.getElementById("nav")
    for (var i = 0; i < nav.childNodes.length; i++) {
        var child = nav.childNodes[i]
        if (child.nodeType === 1) {child.className = ""}
    }
    nav.children[index].className = "active"
}

const goTo = (id,index) => {
  //document.getElementById(id).scrollIntoView() 
  setOpen(index)
}

const setOpen = (index) => {
  content = document.getElementById("content")
  for (var i = 0; i < content.childNodes.length; i++) {
    var child = content.childNodes[i]
    if (child.nodeType === 1) {child.className = "page"}
  }
  content.children[index].className = "open"
}
