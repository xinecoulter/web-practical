var recommendations = {
  recommendationPopUp: function () {
    var firstRecommendation = $("<div>").text("helloooooo");
    firstRecommendation.addClass("pop-up");
    $(".container").append(firstRecommendation);

    // needs logic to determine which match the user clicked on--use of id's
    // this would have more information coming from a database (ex. name)
    // the pop ups need better placement
  }
};

// script for filling the stats section with information
// format numbers properly with commas
// determine if there was a gain or loss in stats in order to classify

// script to add notifications and append to notifications section

// script to remove notifications

// script to show envelope pictures in case of notifications

// script for when user clicks on recommendations button to show more matches

$(document).ready(function () {
  $(".recommendations").on("click", ".recommendation-summary", recommendations.recommendationPopUp);
});