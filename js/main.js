/* Url */
createBox();

 function createBox () {
     for (x=0; x < links.length;x++) {
         createElement("<a>","link-" + x + " col s6 m6  l3","href",links[x].link,"",".boxes");
         newTab(".link-" + x);
         createElement("<div>","card-" + x + " card","key" ,"" ,"" ,".link-" + x);
         createElement("<div>","card-content" + x + " card-content gradicent-3 white-text center","key" ,"" ,"" ,".card-" + x);
         createElement("<i>","icon" + x + " medium material-icons","key" ,"" ,links[x].image ,".card-content" + x);
         createElement("<p>"," ","key" ,"" ,links[x].title ,".card-content" + x);
     }
 }

function createElement(typeElement, nameClass, typeAttr, nameAttr, text, append) {
    $(typeElement)
        .addClass(nameClass)
        .attr(typeAttr, nameAttr)
        .text(text)
        .appendTo(append);
}

function newTab(element) {
    $(element)
        .attr("target","_blank")
}