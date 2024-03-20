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

(function() {
    document.onmousemove = (
    function handleMouseMove(event) {
        var eventDoc, doc, body;
        if (event.pageX == null && event.clientX != null) {
            eventDoc = (event.target && event.target.ownerDocument) || document;
            doc = eventDoc.documentElement;
            body = eventDoc.body;

            event.pageX = event.clientX +
              (doc && doc.scrollLeft || body && body.scrollLeft || 0) -
              (doc && doc.clientLeft || body && body.clientLeft || 0);
            event.pageY = event.clientY +
              (doc && doc.scrollTop  || body && body.scrollTop  || 0) -
              (doc && doc.clientTop  || body && body.clientTop  || 0 );
        }

        console.log(`${event.pageX},${event.pageY}`)
    })
})();
