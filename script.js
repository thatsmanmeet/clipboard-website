gitButton = document.querySelector(".git-btn");
izzyButton = document.querySelector(".izzy-btn");

gitButton.addEventListener("click", () => {
  window.location.href = "https://github.com/thatsmanmeet/clipboard-cleaner";
});

izzyButton.addEventListener("click", () => {
  window.location.href =
    "https://apt.izzysoft.de/fdroid/index/apk/com.thatsmanmeet.clipboardcleaner";
});
