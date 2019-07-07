var myCenter = new google.maps.LatLng(-2.203000,-80.062090);
function initialize(){
    var mapProp={
        center: myCenter,
        zoom: 17,
        scrollwheel: false,
        draggable: false,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    var map = new google.maps.Map(document.getElementById("googleMap"),mapProp);
    var marker = new google.maps.Marker({position: myCenter,});
    marker.setMap(map);
}
google.maps.event.addDomListener(window,'load',initialize);
// Modal Image Gallery
function onClick(element){
    var imgSrc=element.src;
    var lenimgSrc=imgSrc.length;
    var ext=imgSrc.substring(lenimgSrc-3,lenimgSrc);
    var fileName=imgSrc.substring(0,lenimgSrc-4);
    var maxFile=fileName+"max."+ext;
    document.getElementById("img01").src=maxFile;
    document.getElementById("modal01").style.display="block";
}
// Change style of navbar on scroll
window.onscroll=function(){myFunction()};
function myFunction(){
    var navbar = document.getElementById("myNavbar");
    if (document.body.scrollTop>100||document.documentElement.scrollTop>100){
        navbar.className="w3-navbar"+" w3-card-2"+" w3-animate-top"+" w3-white";
    }else{
        navbar.className = navbar.className.replace(" w3-card-2 w3-animate-top w3-white","");
    }
}