function post_now() {
  var post_author_email = firebase.auth().currentUser.email;
  var post_title = document.getElementById("title_ID").value;
  var post_description = document.getElementById("description_ID").value;
  var post_tag = document.getElementById("tag_ID").value;
  var post_readingTime = document.getElementById("minute_ID").value;
  var post_postTime = new Date();

  window.alert(post_author_email + " " + post_description + " " + post_title + " " + post_tag);

  // //it is not working after that..... May be I coded in wrong way. 
  // //I wanted to branch these informations. post's are in "UserPost" branch. user's info is in "UserInfo" branch.
  var newPostKey = firebase.database().ref().child('UserPost').push().key;
  firebase.database().ref('/UserPost/' + newPostKey).set({
    Author_email    : post_author_email,
    Title           : post_title,
    Description     : post_description
  });
  // it's not going further...
  window.location = "homepage.html";
}