const hebammenBetreuung = document.querySelector("#hebammenbetreuung");
const windowFeatures = "menubar=yes,location=yes,resizable=yes,scrollbars=yes,status=yes";
const home = document.querySelector("#home");

hebammenBetreuung.addEventListener("click", function () {
    const imageUrl = window.location.protocol + "//" + window.location.host + "/img/hebammenbetreuung.png";

    window.open(imageUrl, "Hebammen Betreuung", windowFeatures);   
});

home.addEventListener("click", function () {
    setTimeout( function() {
        window.scrollTo(0,0);
    }, 600)
})

$('a').click(function(){
    $('html, body').animate({
        scrollTop: $( $(this).attr('href') ).offset().top
    },600);
    return false;
});