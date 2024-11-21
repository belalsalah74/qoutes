import quotes from "./quotes.js";

setInterval(() => {
  var randomImgNumber = Math.ceil(Math.random() * 9);
  document
    .querySelector("main")
    .style.setProperty("--bg-url", ` url("../imgs/${randomImgNumber}.jpg")`);
}, 3000);

function getQuote() {
  var randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
  var lastQuote = document.getElementById("quote-text");
  while (lastQuote && randomQuote.quote == lastQuote.textContent) {
    randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
  }
  return randomQuote;
}

window.createQuote = function () {
  var randomQuote = getQuote();
  document.getElementById("quote").innerHTML = `
    <blockquote>
            <div class="quote-content">
              <i class="quote-left"></i>
              <h3 class="quote-text" id="quote-text">${randomQuote.quote}</h3>
              <i class="quote-right"></i>
            </div>
            <h2 class="author">${randomQuote.author}</h2>
          </blockquote>
        `;
};
