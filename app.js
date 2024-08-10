function selectElement(element) {
    document.getElementById(element);
    return {
        remove: function() {
            document.getElementById(element).remove();
        },
        addElement: function(type, id, classe) {
            document.getElementById(element).innerHTML = document.getElementById(element).innerHTML + "<" + type + " id='" + id + "' class='" + classe + "'> </" + type + ">"; 
        },
        text: function(text) {
            document.getElementById(element).innerText = text;
        }

    };
}
const kiwiStyler = {
    start: function() {
        document.body.style.padding = "0px";
        document.body.style.margin = "0px";
        document.body.style.display = "flex";
        console.log("Kiwi Styler working!")
        
    },
    XCenter: function(element) {
        document.getElementById(element).style.display = "block";
        document.getElementById(element).style.padding = "0px";
        document.getElementById(element).style.position = "absolute";
        document.getElementById(element).style.left = "0";
        document.getElementById(element).style.right = "0";
        document.getElementById(element).style.margin = "auto";
        
    },
    YCenter: function(element) {
        document.getElementById(element).style.display = "block";
        document.getElementById(element).style.padding = "0px";
        document.getElementById(element).style.position = "absolute";
        document.getElementById(element).style.bottom = "0";
        document.getElementById(element).style.top = "0";
        document.getElementById(element).style.margin = "auto";
    },
    bgColor: function(element, color) {
        document.getElementById(element).style.backgroundColor = color;
    },
    bRadius: function(element, radius) {
        document.getElementById(element).style.borderRadius = radius;
    },
    width: function(element, width) {
        document.getElementById(element).style.width = width;
    },
    height: function(element, height) {
        document.getElementById(element).style.height = height;
    },
    left: function(element, left) {
        document.getElementById(element).style.left = left;
    },
    right: function(element, right) {
        document.getElementById(element).style.right = right;
    },
    top: function(element, top) {
        document.getElementById(element).style.top = top;

    },
    bottom: function(element, bottom) {
        document.getElementById(element).style.bottom = bottom;
    },
    position: function(element, position) {
        document.getElementById(element).style.position = position;
    },
    


}
const response = await fetch('../app/main.kiwi');
const appBuilder = await response.text();

eval(appBuilder);


