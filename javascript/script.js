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
