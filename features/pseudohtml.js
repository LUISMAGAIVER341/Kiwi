function selectElement(element) {
    document.getElementById(element);
    return {
        remove: function() {
            document.getElementById(element).remove();
        },
        addElement: function(type, id, classe) {
            document.getElementById(element).innerHTML = document.getElementById(element).innerHTML + "<" + type + "id='" + id + "' class='" + classe + "'> </" + type + ">"; 
        },
        text: function(text) {
            document.getElementById(element).innerText = text;
        }

    };
}
export default selectElement;