function addparagraph(){
    let p1=document.createElement("p")
    let p2=document.createTextNode("This is a paragraph")
    p1.appendChild(p2)
    document.body.appendChild(p2)

}