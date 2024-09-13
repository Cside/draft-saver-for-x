window.addEventListener("beforeunload", (event) => {
  const tweetTextarea = document.querySelector(
    '[data-testid^="tweetTextarea"]'
  );
  if (
    tweetTextarea.querySelectorAll('[id^="placeholder"]').length === 0 &&
    tweetTextarea.textContent !== ""
  )
    event.preventDefault();
});
