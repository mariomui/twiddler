# datagenerator
* ## Creates two global variables,
  * ### users
    users is an array of strings -- all the usernames that you're following. 
  * ### streams.
    * #### Object with two properties,
        * **users** (stream.users is {})
            *  streams.users is an object with properties for each user.
                * **example** 
                `streams.users.shawndrost has all of shawndrost's tweets.`
        *  **home** (stream.home is [])
            *  all tweets from all the users you're following.

# feature 1
* Show the user new tweets [x]somehow. (You can show them automatically as they're created.

users[ARR] (4) ["shawndrost", "sharksforcheap", "mracus", "douglascalhoun"]

streams.home
home: array(111)


users: object(user)

streams.users.shawndrost[55]
>>{user: "shawndrost", message: "last night i overhauled the security system but only i know how", created_at: Sun Sep 30 2018 21:41:13 GMT-0500 (Central Daylight Time)}

the bigger the number the later the tweet.

## feature 2 [x]
Timestamp feature.
stream.users.shaw
streams.home[10].created_at
>> Sun Sep 30 2018 21:49:14 GMT-0500 (Central Daylight Time)


##feature 3

var writeTweet = function(message){
  if(!visitor){
    throw new Error('set the global visitor property!');
  }
  var tweet = {};
  tweet.user = visitor;
  tweet.message = message;
  addTweet(tweet);
};

## debug feature
[x] press CMD+E to show borders on all major elements.


## Future Features

Trend List
Animations on every moving item.
Login Page.
If detection that cursor is on text area, 
  make shift+renter \n
  make return key = Submit