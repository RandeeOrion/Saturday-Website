// input: name of feed and weight of bag

// work: construct and HTML string that we can hand over to document.write

//Output: an html code that will add name and weight of new feed 

// HTML code: 


function addNewFeedHTML(feedName, weight) {
    var newFeed = '<article>' +
        '<h4>' +
        feedName +
        '</h4>' +
        '<p>' +
        weight +
        '</p>' +
        '</article>';
    return newFeed; 
}

var wantToAddNewFeed = prompt("Do you want to add a new kind of feed?");

if (wantToAddNewFeed === 'yes') {
    var feedName = prompt ('What kind of feed is it?');
    var weight = prompt ('What is the weight of the bag?');
    var newFeedHTML = addNewFeed (feedName, weight);
    console.log(addNewFeed);
    document.write (addNewFeed);
}