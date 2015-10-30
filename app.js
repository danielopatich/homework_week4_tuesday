$.ajaxSetup({
  headers: {
    "Authorization": "token " + token
  }
});


var url = 'https://api.github.com/users/danielopatich/repos';
var repoFeed = $('.repoLog');

$.getJSON('https://api.github.com/users/danielopatich/repos').done(function(data){
 var displayRepos = function(repos) {
   repos.forEach(function(repo) {

     var repoContainer = $('<section class="repo"></section>');
     var nameContainer = $('<a class="name" href="'+ repo.html_url +'">' + repo.name + '</a>');
    //  var timeContainer = $('<a class="time" href="'+ repo.updated_at +'">' + repo.name + '</a>');
     //
    //  timeContainer.append(nameContainer)
     repoContainer.append(nameContainer);
     repoFeed.prepend(repoContainer);
   });
 }
 displayRepos(data);
});

// $getJSON('https://api.github.com/users/danielopatich/repos').done(function(data){
//   var then = $('then'),
//       date = moment(updated_at(repo.attr('data-date'))),
//
//       var timeContainer = $('<a class="time" href="'+ repo.updated_at +'">' + repo.name + '</a>');
//
//       timeContainer.append(nameContainer)
//
//
//       update = function(){
//                  repo.updated_at(date.fromNow());
//                };
// });


//
// forEach(function (arr, index, array)
