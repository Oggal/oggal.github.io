//Store a list of sections
var sections = [];

$(document).ready(function() {
        console.log("ready");
        // Add all sections to the list
        $("section").each(function(item) {
                sections.push($(this));
                $(this).css("opacity", "0");
                console.log(sections);
        });
        // Mouseover function
        $('.selection').mouseover(function() {
                OnMouseEnter($(this));
        });
});

function OnMouseEnter(element) {        
        //hide all sections except the one that's name matches the element's id
        for (var i = 0; i < sections.length; i++) {
                if (sections[i].attr("id") != element.attr("id")) {
                        
                        sections[i].css("opacity", "0"); // set opacity to 0
                        sections[i].css("transition", "opacity 0.5s"); // add transition
                }
                else {
                        sections[i].css("display", "block"); // set display to block
                        sections[i].css("opacity", "1"); // set opacity to 1
                        sections[i].css("transition", "opacity 1s"); // add transition
                }
        }
}

function OnMouseExit(element) {
        for (var i = 0; i < sections.length; i++) {
                sections[i].css("opacity", "0"); // set opacity to 0
                sections[i].css("transition", "opacity 1s"); // add transition
        }
}

