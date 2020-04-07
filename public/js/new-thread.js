$(document).ready(function() {
  const $newThreadForm = $("#new-thread");
  const $titleInput = $("#thread-title-input");
  const $bodyInput = $("#thread-body-input");
  const $createButton = $("#create-thread-button");

  $createButton.on("click", function(event) {
    event.preventDefault();

    const newThreadData = {
      title: $titleInput.val().trim(),
      body: $bodyInput.val().trim()
    };

    createThread(newThreadData.title, newThreadData.body);
    $titleInput.val("");
    $bodyInput.val("");
  });

  function createThread(title, body) {
    $.post("/api/new/thread", {
      title: title,
      body: body
    })
      .then(function() {
        console.log("Successfully added a thread to the db");
      })
      .catch(err => {
        console.log(err);
      });
  }
});

//new-thread  - id for entire form
//thread-title-input - should be obvious
//thread-body-input - see above
