$(document).ready(function() {
    // Sorting functionality
    let postBoxes = $('.post-box');
    postBoxes.sort(function(a, b) {
        return $(b).data('number') - $(a).data('number');
    });
    postBoxes.appendTo('.post'); // assuming the .post element is the container for the post boxes

    // Filter functionality
    $(".filter-item").click(function() {
        const value = $(this).attr("data-filter");
        
        if (value == "all") {
            $(".post-box").show("1000");
            $("#banner").hide(); // Hide banner when "all" filter is selected
        } else {
            $(".post-box").not('.' + value).hide("1000");
            $(".post-box").filter('.' + value).show("1000");
            $("#banner").show(); // Show banner when a specific filter is selected
        }
    });

    // Highlight active filter
    $(".filter-item").click(function() {
        $(".filter-item").removeClass("active-filter");
        $(this).addClass("active-filter");
    });
});

// Scroll functionality for header
const header = document.querySelector('header');
window.addEventListener('scroll', () => {
    if (window.scrollY > 0) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});
