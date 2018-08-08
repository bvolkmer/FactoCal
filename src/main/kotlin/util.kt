import org.w3c.dom.Element
import org.w3c.dom.HTMLTextAreaElement

fun uuid(): String {
    return js("""'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
    var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
    return v.toString(16);
  });""") as String
}

fun Element.removeAllChildren() {
    while (this.hasChildNodes()) this.removeChild(this.lastChild!!)
}

fun HTMLTextAreaElement.fit() {
    this.style.height = "${this.scrollHeight}px"
    this.style.width = "${this.scrollWidth}px"
}
