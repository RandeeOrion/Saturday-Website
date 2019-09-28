function newFeedHTML (name , description){

    var newFeed = '<article>' +
    '<h3>' +
    name +
    '</h3>' +
    '<p>' +
    description +
    '</p>' +
    '</article>' ;
return newFeed;
}


var wantsToAddFeed= prompt("Do you want to add new feed?");

var numberOfBrands = prompt('How many brands do you want to add?');


for (numberOfBrands; numberOfBrands > 0; numberOfChicken--) {
    
  // if so, ask for name and description
  var brandName = prompt("What kind of feed do you want to add:");
  var feedDescription = prompt("How many pounds is the bag and is it Layer or Grower feed?");

  // give name and description to the constructCatHTML function to let it do its thing
  var newFeedHtml = creatNewFeedHTML (brandName, feedDescription);

  // hand the resulting HTML off to document.write
  console.log(newFeedHtml);
  document.write(newFeedHtml);
}