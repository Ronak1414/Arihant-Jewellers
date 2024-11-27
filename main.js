(function ($) {
  "use strict";

  new WOW().init();

  //navbar cart
  $(".cart_link > a").on("click", function () {
    $(".mini_cart").addClass("active");
  });

  $(".mini_cart_close > a").on("click", function () {
    $(".mini_cart").removeClass("active");
  });

  //sticky navbar
  $(window).on("scroll", function () {
    var scroll = $(window).scrollTop();
    if (scroll < 100) {
      $(".sticky-header").removeClass("sticky");
    } else {
      $(".sticky-header").addClass("sticky");
    }
  });

  // background image
  function dataBackgroundImage() {
    $("[data-bgimg]").each(function () {
      var bgImgUrl = $(this).data("bgimg");
      $(this).css({
        "background-image": "url(" + bgImgUrl + ")", // concatenation
      });
    });
  }

  $(window).on("load", function () {
    dataBackgroundImage();
  });

  //for carousel slider of the slider section
  $(".slider_area").owlCarousel({
    animateOut: "fadeOut",
    autoplay: true,
    loop: true,
    nav: false,
    autoplayTimeout: 6000,
    items: 1,
    dots: true,
  });

  //product column responsive
  // $(".product_column3").slick({
  //   centerMode: true,
  //   centerPadding: "0",
  //   slidesToShow: 5,
  //   arrows: true,
  //   rows: 2,
  //   prevArrow:
  //     '<button class="prev_arrow"><i class="ion-chevron-left"></i></button>',
  //   nextArrow:
  //     '<button class="next_arrow"><i class="ion-chevron-right"></i></button>',
  //   responsive: [
  //     {
  //       breakpoints: 400,
  //       settings: {
  //         slidesToShow: 1,
  //         slidesToScroll: 1,
  //       },
  //     },
  //     {
  //       breakpoints: 768,
  //       settings: {
  //         slidesToShow: 2,
  //         slidesToScroll: 2,
  //       },
  //     },
  //     {
  //       breakpoints: 992,
  //       settings: {
  //         slidesToShow: 3,
  //         slidesToScroll: 3,
  //       },
  //     },
  //     {
  //       breakpoints: 1200,
  //       settings: {
  //         slidesToShow: 4,
  //         slidesToScroll: 4,
  //       },
  //     },
  //   ],
  // });

  // //for tooltip
  // $('[data-toggle="tooltip"]').tooltip();

  // //tooltip active
  // $(".action_links ul li a, .quick_button a").tooltip({
  //   animated: "fade",
  //   placement: "top",
  //   container: "body",
  // });

  // //product row activation responsive
  // $(".product_row1").slick({
  //   centerMode: true,
  //   centerPadding: "0",
  //   slidesToShow: 5,
  //   arrows: true,
  //   prevArrow:
  //     '<button class="prev_arrow"><i class="ion-chevron-left"></i></button>',
  //   nextArrow:
  //     '<button class="next_arrow"><i class="ion-chevron-right"></i></button>',
  //   responsive: [
  //     {
  //       breakpoints: 400,
  //       settings: {
  //         slidesToShow: 1,
  //         slidesToScroll: 1,
  //       },
  //     },
  //     {
  //       breakpoints: 768,
  //       settings: {
  //         slidesToShow: 2,
  //         slidesToScroll: 2,
  //       },
  //     },
  //     {
  //       breakpoints: 992,
  //       settings: {
  //         slidesToShow: 3,
  //         slidesToScroll: 3,
  //       },
  //     },
  //     {
  //       breakpoints: 1200,
  //       settings: {
  //         slidesToShow: 4,
  //         slidesToScroll: 4,
  //       },
  //     },
  //   ],
  // });


  (function ($) {
    "use strict";
    
    // Product Column Slider
    $(".product_column3").slick({
        centerMode: true,
        centerPadding: "0",
        slidesToShow: 5,
        arrows: true,
        rows: 2,
        prevArrow: '<button class="prev_arrow"><i class="ion-chevron-left"></i></button>',
        nextArrow: '<button class="next_arrow"><i class="ion-chevron-right"></i></button>',
        responsive: [
            {
                breakpoint: 320,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    rows: 1,
                    arrows: true,
                    centerMode: false
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    rows: 1,
                    arrows: true,
                    centerMode: false
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    rows: 1,
                    arrows: true,
                    centerMode: false
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    arrows: true,
                    centerMode: false
                }
            },
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    arrows: true
                }
            }
        ]
    });

    // Tooltip initialization with mobile check
    if (window.innerWidth > 767) {
        $('[data-toggle="tooltip"]').tooltip();

        $(".action_links ul li a, .quick_button a").tooltip({
            animated: "fade",
            placement: "top",
            container: "body"
        });
    }

    // Product Row Slider
    $(".product_row1").slick({
        centerMode: true,
        centerPadding: "0",
        slidesToShow: 5,
        arrows: true,
        prevArrow: '<button class="prev_arrow"><i class="ion-chevron-left"></i></button>',
        nextArrow: '<button class="next_arrow"><i class="ion-chevron-right"></i></button>',
        responsive: [
            {
                breakpoint: 320,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: true,
                    centerMode: false
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: true,
                    centerMode: false
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    arrows: true,
                    centerMode: false
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    arrows: true,
                    centerMode: false
                }
            },
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    arrows: true
                }
            }
        ]
    });

    // Handle resize events
    let resizeTimer;
    $(window).on('resize', function() {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(function() {
            if (window.innerWidth <= 767) {
                $('.tooltip').remove();
            } else {
                $('[data-toggle="tooltip"]').tooltip();
            }
        }, 250);
    });
})(jQuery);

  // blog section
  $(".blog_column3").owlCarousel({
    autoplay: true,
    loop: true,
    nav: true,
    autoplayTimeout: 5000,
    items: 3,
    dots: false,
    margin: 30,
    navText: [
      '<i class="ion-chevron-left"></i>',
      '<i class="ion-chevron-right"></i>',
    ],
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
      },
      768: {
        items: 2,
      },
      992: {
        items: 3,
      },
    },
  });

  //navactive responsive
  $(".product_navactive").owlCarousel({
    autoplay: false,
    loop: true,
    nav: true,
    items: 4,
    dots: false,
    navText: [
      '<i class="ion-chevron-left arrow-left"></i>',
      '<i class="ion-chevron-right arrow-right"></i>',
    ],
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
      },
      250: {
        items: 2,
      },
      480: {
        items: 3,
      },
      768: {
        items: 4,
      },
    },
  });

  $(".modal").on("shown.bs.modal", function (e) {
    $(".product_navactive").resize();
  });

  $(".product_navactive a").on("click", function (e) {
    e.preventDefault();
    var $href = $(this).attr("href");
    $(".product_navactive a").removeClass("active");
    $(this).addClass("active");
    $(".product-details-large .tab-pane").removeClass("active show");
    $(".product-details-large " + $href).addClass("active show");
  });
})(jQuery);



// the mobile view of the header 

// document.addEventListener('DOMContentLoaded', function() {
//   // Mobile menu toggle functionality
//   const menuItems = document.querySelectorAll('.main_menu nav > ul > li');

//   menuItems.forEach(item => {
//       // Check if item has submenu or mega menu
//       const hasDropdown = item.querySelector('.sub_menu, .mega_menu');
//       if (hasDropdown) {
//           // Add dropdown arrow indicator
//           const link = item.querySelector('a');
//           if (!link.querySelector('.ion-chevron-down')) {
//               link.innerHTML += ' <i class="ion-chevron-down"></i>';
//           }

//           // Handle click event for mobile
//           link.addEventListener('click', function(e) {
//               // Check if we're in mobile view
//               if (window.innerWidth <= 767) {
//                   e.preventDefault();
//                   const dropdown = item.querySelector('.sub_menu, .mega_menu');
                  
//                   // Close other open dropdowns
//                   menuItems.forEach(otherItem => {
//                       if (otherItem !== item) {
//                           const otherDropdown = otherItem.querySelector('.sub_menu, .mega_menu');
//                           if (otherDropdown) {
//                               otherDropdown.style.display = 'none';
//                               otherItem.classList.remove('active');
//                           }
//                       }
//                   });

//                   // Toggle current dropdown
//                   if (dropdown.style.display === 'block') {
//                       dropdown.style.display = 'none';
//                       item.classList.remove('active');
//                   } else {
//                       dropdown.style.display = 'block';
//                       item.classList.add('active');
//                   }
//               }
//           });
//       }
//   });

//   // Mini Cart toggle
//   const cartLink = document.querySelector('.cart_link > a');
//   const miniCart = document.querySelector('.mini_cart');
//   const miniCartClose = document.querySelector('.mini_cart_close > a');

//   if (cartLink && miniCart && miniCartClose) {
//       cartLink.addEventListener('click', function(e) {
//           e.preventDefault();
//           miniCart.classList.add('active');
//       });

//       miniCartClose.addEventListener('click', function(e) {
//           e.preventDefault();
//           miniCart.classList.remove('active');
//       });

//       // Close mini cart when clicking outside
//       document.addEventListener('click', function(e) {
//           if (!miniCart.contains(e.target) && !cartLink.contains(e.target)) {
//               miniCart.classList.remove('active');
//           }
//       });
//   }

//   // Search dropdown toggle
//   const searchBtn = document.querySelector('.search_btn');
//   const dropdownSearch = document.querySelector('.dropdown_search');

//   if (searchBtn && dropdownSearch) {
//       searchBtn.addEventListener('click', function(e) {
//           e.preventDefault();
//           dropdownSearch.style.opacity = dropdownSearch.style.opacity === '1' ? '0' : '1';
//           dropdownSearch.style.visibility = dropdownSearch.style.visibility === 'visible' ? 'hidden' : 'visible';
//       });

//       // Close search dropdown when clicking outside
//       document.addEventListener('click', function(e) {
//           if (!searchBtn.contains(e.target) && !dropdownSearch.contains(e.target)) {
//               dropdownSearch.style.opacity = '0';
//               dropdownSearch.style.visibility = 'hidden';
//           }
//       });
//   }

//   // Window resize handler
//   let resizeTimer;
//   window.addEventListener('resize', function() {
//       clearTimeout(resizeTimer);
//       resizeTimer = setTimeout(function() {
//           // Reset mobile menu styles when returning to desktop view
//           if (window.innerWidth > 767) {
//               const dropdowns = document.querySelectorAll('.sub_menu, .mega_menu');
//               dropdowns.forEach(dropdown => {
//                   dropdown.style.display = '';
//               });
//               menuItems.forEach(item => item.classList.remove('active'));
//           }
//       }, 250);
//   });
// });

// document.addEventListener('DOMContentLoaded', function() {
//   // Mobile menu functionality
//   const hamburger = document.querySelector('.hamburger_icon');
//   const mobileMenu = document.querySelector('.main_menu');
//   const body = document.body;

//   // Create overlay
//   const overlay = document.createElement('div');
//   overlay.className = 'menu_overlay';
//   overlay.style.cssText = `
//       position: fixed;
//       top: 0;
//       left: 0;
//       width: 100%;
//       height: 100%;
//       background: rgba(0, 0, 0, 0.5);
//       z-index: 998;
//       opacity: 0;
//       visibility: hidden;
//       transition: 0.3s;
//   `;
//   body.appendChild(overlay);

//   // Toggle menu function
//   function toggleMenu() {
//       hamburger.classList.toggle('active');
//       mobileMenu.classList.toggle('active');
//       overlay.style.opacity = overlay.style.opacity === '1' ? '0' : '1';
//       overlay.style.visibility = overlay.style.visibility === 'visible' ? 'hidden' : 'visible';
//       body.style.overflow = body.style.overflow === 'hidden' ? '' : 'hidden';
//   }

//   // Event listeners
//   hamburger?.addEventListener('click', toggleMenu);
//   overlay?.addEventListener('click', toggleMenu);

//   // Mobile submenu toggles
//   const menuItems = document.querySelectorAll('.main_menu nav > ul > li > a');
  
//   menuItems.forEach(item => {
//       const hasSubmenu = item.nextElementSibling;
//       if(hasSubmenu) {
//           item.addEventListener('click', function(e) {
//               if(window.innerWidth <= 767) {
//                   e.preventDefault();
//                   const submenu = this.nextElementSibling;
//                   const isOpen = submenu.style.display === 'block';
                  
//                   // Close all other open submenus
//                   const allSubmenus = document.querySelectorAll('.sub_menu, .mega_menu');
//                   allSubmenus.forEach(menu => {
//                       if(menu !== submenu) {
//                           menu.style.display = 'none';
//                       }
//                   });

//                   // Toggle current submenu
//                   submenu.style.display = isOpen ? 'none' : 'block';
//               }
//           });
//       }
//   });

//   // Sticky header functionality
//   const header = document.querySelector('.sticky-header');
//   let lastScroll = 0;

//   window.addEventListener('scroll', () => {
//       const currentScroll = window.pageYOffset;
      
//       if(currentScroll > lastScroll && currentScroll > 200) {
//           header.style.transform = 'translateY(-100%)';
//       } else {
//           header.style.transform = 'translateY(0)';
//       }
//       lastScroll = currentScroll;
//   });

//   // Reset menu state on window resize
//   let resizeTimer;
//   window.addEventListener('resize', function() {
//       clearTimeout(resizeTimer);
//       resizeTimer = setTimeout(function() {
//           if(window.innerWidth > 767) {
//               hamburger.classList.remove('active');
//               mobileMenu.classList.remove('active');
//               overlay.style.opacity = '0';
//               overlay.style.visibility = 'hidden';
//               body.style.overflow = '';
              
//               // Reset all submenus
//               const allSubmenus = document.querySelectorAll('.sub_menu, .mega_menu');
//               allSubmenus.forEach(menu => {
//                   menu.style.display = '';
//               });
//           }
//       }, 250);
//   });
// });


document.addEventListener('DOMContentLoaded', function() {
  // Get necessary elements
  const hamburgerIcon = document.querySelector('.mobile_menu_icon');
  const mainMenu = document.querySelector('.main_menu');
  const body = document.body;

  // Create overlay if it doesn't exist
  if (!document.querySelector('.menu_overlay')) {
      const overlay = document.createElement('div');
      overlay.className = 'menu_overlay';
      body.appendChild(overlay);
  }

  const menuOverlay = document.querySelector('.menu_overlay');

  // Toggle menu function
  function toggleMenu(event) {
      event.preventDefault();
      hamburgerIcon.querySelector('.hamburger_icon').classList.toggle('active');
      mainMenu.classList.toggle('active');
      menuOverlay.classList.toggle('active');
      body.style.overflow = body.style.overflow === 'hidden' ? '' : 'hidden';
  }

  // Add click events
  hamburgerIcon.addEventListener('click', toggleMenu);
  menuOverlay.addEventListener('click', toggleMenu);

  // Handle submenus
  const menuItems = document.querySelectorAll('.main_menu nav > ul > li > a');
  
  menuItems.forEach(item => {
      const submenu = item.nextElementSibling;
      if (submenu && (submenu.classList.contains('sub_menu') || submenu.classList.contains('mega_menu'))) {
          item.addEventListener('click', function(e) {
              if (window.innerWidth <= 767) {
                  e.preventDefault();
                  const isOpen = submenu.style.display === 'block';
                  
                  // Close other submenus
                  menuItems.forEach(otherItem => {
                      const otherSubmenu = otherItem.nextElementSibling;
                      if (otherSubmenu && otherSubmenu !== submenu) {
                          otherSubmenu.style.display = 'none';
                          otherItem.classList.remove('active');
                      }
                  });

                  // Toggle current submenu
                  submenu.style.display = isOpen ? 'none' : 'block';
                  this.classList.toggle('active');
              }
          });
      }
  });

  // Handle window resize
  window.addEventListener('resize', function() {
      if (window.innerWidth > 767) {
          // Reset mobile menu states
          hamburgerIcon.querySelector('.hamburger_icon').classList.remove('active');
          mainMenu.classList.remove('active');
          menuOverlay.classList.remove('active');
          body.style.overflow = '';

          // Reset submenus
          document.querySelectorAll('.sub_menu, .mega_menu').forEach(menu => {
              menu.style.display = '';
          });
      }
  });
});



// Add this to your JavaScript file or in a script tag
document.addEventListener('DOMContentLoaded', function() {
  const productImages = document.querySelectorAll('.product-image'); // Add class 'product-image' to your product images
  const modalImage = document.getElementById('modalImage');

  productImages.forEach(image => {
      image.addEventListener('click', function() {
          const imageSrc = this.getAttribute('src');
          modalImage.setAttribute('src', imageSrc);
      });
  });
});




// document.getElementById("buyNowButton").addEventListener("click", function (event) {
//   event.preventDefault();

//   // Display the modal
//   const modal = document.getElementById("modal");
//   modal.style.display = "block";

//   // Handle WhatsApp button click
//   document.getElementById("whatsappButton").addEventListener("click", function () {
//     const whatsappNumber = "9880890321";
//     const whatsappURL = `https://wa.me/${whatsappNumber}`;
//     window.open(whatsappURL, "_blank");
//   });

//   // Close modal when clicking outside of it
//   window.addEventListener("click", function (event) {
//     if (event.target === modal) {
//       modal.style.display = "none";
//     }
//   });
// });




// document.addEventListener("DOMContentLoaded", function () {
//   const buyNowButton = document.getElementById("buyNowButton");
//   const modal = document.getElementById("modal");
//   const body = document.body; // Reference to the body to apply styles
//   const whatsappButton = document.getElementById("whatsappButton");

//   // Event listener for "BUY NOW" button
//   buyNowButton.addEventListener("click", function (event) {
//     event.preventDefault();
//     modal.style.display = "block"; // Show the modal
//     body.style.overflow = "hidden"; // Disable scrolling on the background
//     body.style.backgroundColor = "rgba(0, 0, 0, 0.6)"; // Dim the background
//   });

//   // Event listener for WhatsApp button inside the modal
//   whatsappButton.addEventListener("click", function () {
//     const whatsappNumber = "9880890321";
//     const whatsappURL = `https://wa.me/${whatsappNumber}`;
//     window.open(whatsappURL, "_blank"); // Open WhatsApp chat in a new tab
//   });

//   // Close modal when clicking outside the modal content
//   window.addEventListener("click", function (event) {
//     if (event.target === modal) {
//       modal.style.display = "none"; // Hide the modal
//       body.style.overflow = "auto"; // Re-enable scrolling
//       body.style.backgroundColor = ""; // Remove dimming
//     }
//   });
// });



document.addEventListener("DOMContentLoaded", function () {
  const buyNowButtons = document.querySelectorAll(".buy_now_button"); // Select all buttons with the class
  const modal = document.getElementById("modal");
  const body = document.body; // Reference to the body to apply styles
  const whatsappButton = document.getElementById("whatsappButton");

  // Event listener for all "BUY NOW" buttons
  buyNowButtons.forEach((button) => {
    button.addEventListener("click", function (event) {
      event.preventDefault();
      modal.style.display = "block"; // Show the modal
      body.style.overflow = "hidden"; // Disable scrolling on the background
      body.style.backgroundColor = "rgba(0, 0, 0, 0.6)"; // Dim the background
    });
  });

  // Event listener for WhatsApp button inside the modal
  whatsappButton.addEventListener("click", function () {
    const whatsappNumber = "9880890321";
    const whatsappURL = `https://wa.me/${whatsappNumber}`;
    window.open(whatsappURL, "_blank"); // Open WhatsApp chat in a new tab
  });

  // Close modal when clicking outside the modal content
  window.addEventListener("click", function (event) {
    if (event.target === modal) {
      modal.style.display = "none"; // Hide the modal
      body.style.overflow = "auto"; // Re-enable scrolling
      body.style.backgroundColor = ""; // Remove dimming
    }
  });
});

