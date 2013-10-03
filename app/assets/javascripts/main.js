var recommendations = {
  recommendationPopUp: function () {
    var firstRecommendation = $("<div>").text("helloooooo");
    firstRecommendation.addClass("pop-up");
    $(".container").append(firstRecommendation);
    // this would have more information coming from a database (ex. name)
  }
};

$(document).ready(function () {
  $(".recommendations").on("click", ".recommendation-summary", recommendations.recommendationPopUp);
});