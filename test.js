setTimeout( () => { console.log('hi') }, 8000);
console.log('bye');
//function implementations are ignored until invoked.
// const generateNons = () => {
//     console.info('hi');
// }

// var scheduleNextBarf = function(){
//     generateNons();
//     setTimeout(scheduleNextBarf(), Math.random() * 1500);
//     window.alert(taboo.test);
//   };
// scheduleNextBarf();

/*
var generateRandomTweet = function(){
  var tweet = {};
  tweet.user = randomElement(users);
  tweet.message = randomMessage();
  tweet.created_at = new Date();
  addTweet(tweet);

create an object. then add this object that is the tweet-container

var addTweet = function(newTweet){
  var username = newTweet.user;
  streams.users[username].push(newTweet);
  streams.home.push(newTweet);
};

newTweet is the tweet container, and it creates the timeline in users.
creates the stream of data in stream.home.

};

*/