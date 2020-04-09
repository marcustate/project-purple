$(document).ready(function() {
  // This file just does a GET request to figure out which user is logged in
  // and updates the HTML on the page
  const $memberName = $(".member-name");
  const $commentForm = $("#comment-form");
  const $commentInput = $("#comment-input");
  const $logoutBtn = $("#logout-button");
  const $userEmail = $("#user-email");

  $.get("/api/user_data").then(function(data) {
    $memberName.text(data.email);
  });

  $commentForm.on("submit", function(event) {
    event.preventDefault();

    const newComment = {
      body: $commentInput.val().trim()
    };

    createComment(newComment.body);
    $commentInput.val("");
  });

  function createComment(body) {
    $.post("/api/new/thread", {
      body: body
    }).then(function() {
      console.log("Successfully added a thread to the db");

      location.reload();

      // I tried to comment the rest of this function out but something wasn't working when I did.
      $.get("/api/user_data")
        .then(function(data) {
          const userName = JSON.stringify($userEmail.text(data.email));
          console.log(userName);

          const $commentTemplate = $(`<div class="row welcome discussion list-style">
          <div class="col-12">
              <div class="row">
                  <p id="user-email" class="text-white leading-none px-4 py-2">
                      <!-- placeholder for any comments added to a thread-->
                      ${userName}
                  </p>
              </div>
              <div class="row">
                  <p class="text-white leading-none px-4 py-2">
                      ${body}
                  </p>
              </div>
          </div>
      </div>`);

          $($commentTemplate).prependTo(".comments");
        })
        .catch(err => {
          console.log(err);
        });
    });
  }

  $logoutBtn.on("click", function() {
    location = "/logout";
    //$.get("/logout").then(function() {
    //  console.log("successfully logged out");
    //});
  });
});
