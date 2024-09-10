window.addEventListener("beforeunload", (event) => {
  const container = document.querySelector('[data-testid^="tweetTextarea"]');
  if (
    container.querySelectorAll('[id^="placeholder"]').length === 0 &&
    container.textContent !== ""
  )
    event.preventDefault();
});
