$(document).ready(function() {
  // This file just does a GET request to figure out which user is logged in
  // and updates the HTML on the page
  $.get("/api/user_data").then(function(data) {
    $(".member-name").text(data.email);
  });
  $("#new-thread-button").on("click", function(e) {
    console.log("button clicked");
    e.preventDefault();
    var url = "/newthread";
    location.replace(url);
  });
//   $(() => {
//     $("#send").click(()=>{
//        sendThread({
//           name: $("#name").val(), 
//           thread:$("#thread").val()});
//         })
//       getThreads()
//     })
    
// function addThreads(thread){
//    $(“#thread”).append(`
//       <h4> ${thread.name} </h4>
//       <p>  ${thread.thread} </p>`)
//    }
   
// function getThreads(){
//   $.get(‘http://localhost:8080/members', (data) => {
//    data.forEach(addThreads);
//    })
//  }
 
// function sendthread(thread){
//    $.post(‘http://localhost:8080/members', thread)
//  }
// });
// change this function above to do event listener for logout
