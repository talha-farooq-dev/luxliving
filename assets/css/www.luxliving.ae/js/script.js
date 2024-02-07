window.addEventListener('DOMContentLoaded', () => {

     let menuIcon = document.querySelector('#hamburg');
     let bars = document.querySelector('#hamburg #bars');
     let cross = document.querySelector('#hamburg #cross');
     let navbar = document.querySelector('.navbar');

     menuIcon.onclick = () => {
          navbar.classList.toggle('active');
          bars.classList.toggle('active');
          cross.classList.toggle('active');
     };

     window.onscroll = () => {
        //   navbar.classList.remove('active');
        //   bars.classList.add('active');
        //   cross.classList.remove('active');
          //inscroll add sticky class to header
          let header = document.getElementById('header-down');
          header.classList.toggle('sticky', window.scrollY > 0);
     };

     //// this is to prevent menu list to not clickable


     let anchorTags = document.querySelectorAll('.navbar ul > li > a.notclick');

     if (window.matchMedia('(max-width: 991px)').matches) {
          anchorTags.forEach((anchorTag) => {
               anchorTag.addEventListener('click', (event) => {
                    event.preventDefault();
               });
          });
     }

     // header scroll script

     window.addEventListener('scroll', function () {
          var topHeader = document.querySelector('.header-top');
          var bottomHeaderlogo = document.querySelector('.header-down-logo');
          var bottomHeaderLinks = document.querySelector('header > .header-down > .links');
          var scrollTop = window.pageYOffset || document.documentElement.scrollTop;

          if (scrollTop > 0) {
               topHeader.classList.add('hide');
               bottomHeaderlogo.classList.add('active');
               if (window.matchMedia('(max-width: 991px)').matches) {
                    bottomHeaderLinks.classList.add('none');
               }
          } else {
               topHeader.classList.remove('hide');
               bottomHeaderlogo.classList.remove('active');
               bottomHeaderLinks.classList.remove('none');

          }
     });
     
     // Back to top Button
     var btn = document.getElementById("back-to-top");

        window.addEventListener("scroll", function() {
            if (window.scrollY > 300) {
                btn.classList.add("show");
            } else {
                btn.classList.remove("show");
            }
        });

        btn.addEventListener("click", function(e) {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
        });

     handlePopupForm()

});

function getWindowWidth() {
     const windowWidth = window.innerWidth;
     return windowWidth;
}

//footer_phone intlTelInput Home footer
var input = document.querySelector("#footer_phone");
window.intlTelInput(input, {
     separateDialCode: true,
     initialCountry: "ae",
     utilsScript: "js/utils.js",
});

//contact_phone intlTelInput Home property-worth
var input = document.querySelector("#contact_phone");
window.intlTelInput(input, {
     separateDialCode: true,
     initialCountry: "ae",
     utilsScript: "js/utils.js",
});

//contact_phone intlTelInput Careers PAGE
// var input = document.querySelector("#carear_phone");
// window.intlTelInput(input, {
//      separateDialCode: true,
//      initialCountry: "ae",
//      utilsScript: "js/utils.js",
// });

var input = document.querySelector("#popup_phone");
window.intlTelInput(input, {
     separateDialCode: true,
     initialCountry: "ae",
     utilsScript: "js/utils.js",
});

function handlePopupForm() {
     let popupform_btn = document.querySelector('#call-back');
     let popupform = document.querySelector('.popup-form')
     let cancel_popupform = document.querySelector('#cancel_popup-form-x');
     let cancel_popupform_btn = document.querySelector('#cancel_popup-form');
     popupform_btn.addEventListener('click', () => {
          popupform.classList.add('active');
     })
     cancel_popupform.addEventListener('click', () => {
          popupform.classList.remove('active');
     })
     cancel_popupform_btn.addEventListener('click', () => {
          popupform.classList.remove('active');
     })
}

