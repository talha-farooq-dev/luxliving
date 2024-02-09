$(document).ready(function() {

    // set nav-items top border

    $('.unsocial-items ul li').click(function() {
        $('.unsocial-items ul li').removeClass('active');
        $(this).addClass('active');
    });

    var sliderImages;

    // Determine which slider is active
    if ($('.desktop-banner').css('display') == 'block') {
        sliderImages = $('.desktop-banner');
    } else {
        sliderImages = $('.mobile-banner');
    }

    var totalSlides = sliderImages.length,
        currentSlide = 0,
        autoPlayInterval;

    // Function to navigate to the next slide
    function nextSlide() {
        currentSlide = (currentSlide + 1) % totalSlides;
        updateSlider();
    }

    // Function to navigate to the previous slide
    function previousSlide() {
        currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
        updateSlider();
    }

    // Function to update the slider display including opacity
    function updateSlider() {
        sliderImages.css('opacity', 0); // Reset opacity for all images
        sliderImages.eq(currentSlide).css('opacity', 1); // Set opacity to 1 for the current slide
    }

    // Function to start autoplay
    function startAutoPlay() {
        autoPlayInterval = setInterval(nextSlide, 3000); // Change interval time as needed (in milliseconds)
    }

    // Function to stop autoplay
    function stopAutoPlay() {
        clearInterval(autoPlayInterval);
    }

    // Function to initialize the slider
    function initializeSlider() {
        startAutoPlay();

        // Pause autoplay when hovering over the slider
        $('.slider').hover(stopAutoPlay, startAutoPlay);

        // Next button click event
        $('#next-btn').click(nextSlide);

        // Previous button click event
        $('#previous-btn').click(previousSlide);

        // Make slider draggable
        $('.slider').on('mousedown touchstart', function(e) {
            if ($(e.target).is('img')) {
                e.preventDefault(); // Prevent default behavior
            }
            startX = e.pageX || e.originalEvent.touches[0].pageX;
            startOffset = startX - $('.slider').offset().left;
            $(this).addClass('dragging');
        });

        $(document).on('mousemove touchmove', function(e) {
            if (!$('.slider').hasClass('dragging')) return;
            // Only prevent default behavior if the target is not an input field
            if (!$(e.target).is('input')) {
                e.preventDefault(); // Prevent default behavior
            }
            var currentX = e.pageX || e.originalEvent.touches[0].pageX;
            var currentOffset = currentX - $('.slider').offset().left;
            var dragOffset = currentOffset - startOffset;
            var threshold = 50; // Adjust this threshold as needed
            if (Math.abs(dragOffset) > threshold) {
                $('.slider').removeClass('dragging');
                if (dragOffset > 0) {
                    previousSlide();
                } else {
                    nextSlide();
                }
            }
        });
    }

    // Function to handle opacity changes only when the slider is in view
    function handleOpacityChange() {
        var slider = $('.slider');
        var navHeight = $(".nav-bar").outerHeight();

        $(window).scroll(function() {
            var scrollTop = $(window).scrollTop();
            var sliderTop = slider.offset().top;
            var sliderBottom = sliderTop + slider.outerHeight();

            if (sliderBottom > scrollTop + navHeight && sliderTop < scrollTop + navHeight) {
                updateSlider();
            }
        });
    }

    // Initialize the slider
    initializeSlider();

    // Start handling opacity changes
    handleOpacityChange();


    // Allow typing in input fields by preventing default behavior on keydown events

    $('input').on('keydown', function(e) {
        e.stopPropagation(); // Stop propagation to prevent other keydown events from being triggered
    });


    $(document).on('mouseup touchend', function() {
        $('.slider').removeClass('dragging');
    });


    // set current click button value to hide button in form and set active-sale-rent-home-btn class to current btn

    $('.search-bar-btn').click(function() {
        $('.search-bar-btn').removeClass("active-sale-rent-home-btn");
        $(this).addClass("active-sale-rent-home-btn");
        let search_bar_btn_value = $(this).attr('value');
        $('#accessability').attr('value', search_bar_btn_value);
    });



    // display and hide search bar section
    $('.custom-select-box').click(function(event) {
        // event.stopPropagation();

        // Hide all other .search-drop-downs
        $('.search-drop-downs').not($(this).find('.search-drop-downs')).hide();

        // Toggle visibility for the clicked .search-drop-downs
        $(this).find('.search-drop-downs').toggle();
    });

    $('#price-custom-select-box').click(function(e) {
        $('.sub-drop-down-downs').hide();
        // Check if the event target is the parent element itself
        // if (e.target === this) {
        if ($('.child-packet').css('display') === 'flex') {
            $('.child-packet').css('display', 'none');
        } else {
            $('.child-packet').css('display', 'flex');
        }
        // }
    });

    $('.child-packet').click(function(e) {
        e.stopPropagation();
    });

    $('.sub-custom-select-box').click(function() {
        $(this).find('.sub-drop-down-downs').toggle();
    });

    // Stop event propagation when clicking inside the dropdown menu
    $('.search-scroll-bar').click(function(event) {
        event.stopPropagation(); // Prevent click event from bubbling up
    });

    // Click event listener for the document
    $(document).click(function(event) {
        if (!$(event.target).closest('#price-custom-select-box').length) {

            // Hide all .search-drop-downs
            $('.child-packet').hide();
        }
        // Check if the clicked element is not within the custom select box or the dropdown menu or the search input
        if (!$(event.target).closest('.custom-select-box').length && !$(event.target).closest('.search-drop-downs').length) {
            // Hide all .search-drop-downs
            $('.search-drop-downs').hide();
        }
    });

    // Prevent click on search input from closing the dropdown menu
    $('.property-type-search').click(function(event) {
        event.stopPropagation(); // Prevent click event from bubbling up
    });


    nav_offset = $(".nav-bar").offset();
    $(window).scroll(function() {
        if (window.pageYOffset > 127.734375) {
            $(".nav-bar").addClass("sticky-nav-bar");
        } else {
            $(".nav-bar").removeClass("sticky-nav-bar");
        }
    });

    $('.search-drop-downs .search-scroll-bar ul li').click(function(e) {
        var text = $(this).find('a').text();

        if ($(this).closest('.sub-custom-select-box').length || $(this).parent().closest('.sub-custom-select-box').length) {

            $(this).closest('.sub-custom-select-box').find('span').text(text);

            $(this).closest('.sub-drop-down-downs').hide();
        } else {
            console.log('Clicked on other elements');
            // Find the closest .search-drop-downs element and then find the .property-type-search element within it
            $(this).closest('.custom-select-box').find('span').text(text);
            $(this).closest('.search-drop-downs').hide();
        }

    });


    // evaluation request scroll

    $('#free-validation-reuest-btn-packet').click(function() {
        $('.bg-evaluation-section')[0].scrollIntoView({
            behavior: 'smooth'
        });
    });






});