$(document).ready(function () {
  // Fetch data from JSON file (replace with your actual data source)
  $.getJSON("data.json", function (data) {
    const optionsContainer = $(".options");
    let cardCounter = 0; // Counter for limiting the number of cards

    // Loop through each product and generate product cards
    $.each(data, function (index, product) {
      if (cardCounter < 4) {
        const option = $("<div>").addClass("option");

        // Set background image of the option using the product image URL
        option.css("--optionBackground", "url(" + product.productImg + ")");
        option.css("background-size", "cover"); // Set background size to cover

        // Create other elements for the card (label, icon, etc.) if needed

        // Append the card to the options container
        optionsContainer.append(option);

        cardCounter++; // Increment the counter
      }
    });

    // Add click event to product cards
    const options = $(".option");
    options.on("click", function () {
      // Toggle active class on click
      options.removeClass("active");
      $(this).addClass("active");
    });
  });
  $.getJSON("data.json", function (data) {
    const optionsContainer = $(".maincontainer"); // Select the container for the cards
    let cardCounter = 0; // Counter for limiting the number of cards

    // Loop through each product and generate flip cards
    $.each(data, function (index, product) {
      if (cardCounter < 4) {
        const card = $("<div>").addClass("thecard"); // Create the flip card
        const frontFace = $("<div>").addClass("thefront").text(product.title); // Front face with title
        const backFace = $("<div>").addClass("theback").text(product.description); // Back face with description

        // Append front and back faces to the card
        card.append(frontFace, backFace);

        // Append the card to the options container
        optionsContainer.append(card);

        cardCounter++; // Increment the counter
      }
    });

    // Initialize Feather Icons
    feather.replace();

    // Add click event to flip cards
    $(".thecard").on("click", function () {
      $(this).toggleClass("flipped");
    });
  });
});


$('.container').on('click', function () {
  $('.card').toggleClass('flipped');
});
(function($) {
    var slide = function(ele,options) {
        var $ele = $(ele);
        // 默认设置选项
        var setting = {
            speed: 1000,
            interval: 2000,
            
        };
        $.extend(true, setting, options);
        // 规定好每张图片处于的位置和状态
        var states = [
            { $zIndex: 1, width: 120, height: 150, top: 69, left: 134, $opacity: 0.2 },
            { $zIndex: 2, width: 130, height: 170, top: 59, left: 0, $opacity: 0.4 },
            { $zIndex: 3, width: 170, height: 218, top: 35, left: 110, $opacity: 0.7 },
            { $zIndex: 4, width: 224, height: 288, top: 0, left: 263, $opacity: 1 },
            { $zIndex: 3, width: 170, height: 218, top: 35, left: 470, $opacity: 0.7 },
            { $zIndex: 2, width: 130, height: 170, top: 59, left: 620, $opacity: 0.4 },
            { $zIndex: 1, width: 120, height: 150, top: 69, left: 500, $opacity: 0.2 }
        ];

        var $lis = $ele.find('li');
        var timer = null;

        // 事件
        $ele.find('.hi-next').on('click', function() {
            next();
        });
        $ele.find('.hi-prev').on('click', function() {
            states.push(states.shift());
            move();
        });
        $ele.on('mouseenter', function() {
            clearInterval(timer);
            timer = null;
        }).on('mouseleave', function() {
            autoPlay();
        });

        move();
        autoPlay();

        function move() {
            $lis.each(function(index, element) {
                var state = states[index];
                $(element).css('zIndex', state.$zIndex).finish().animate(state, setting.speed).find('img').css('opacity', state.$opacity);
            });
        }

        function next() {
            states.unshift(states.pop());
            move();
        }

        function autoPlay() {
            timer = setInterval(next, setting.interval);
        }
    }
    $.fn.hiSlide = function(options) {
        $(this).each(function(index, ele) {
            slide(ele,options);
        });
        return this;
    }
})(jQuery);

