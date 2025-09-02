//    __            _           _ _     _
//   /__\_   ____ _| |__  _   _(_) | __| |
//  /_\ \ \ / / _` | '_ \| | | | | |/ _` |
// //__  \ V / (_| | |_) | |_| | | | (_| |
// \__/   \_/ \__,_|_.__/ \__,_|_|_|\__,_|
//
//  _
// | |__  _   _
// | '_ \| | | |
// | |_) | |_| |
// |_.__/ \__, |
//         |___/
//  __       _ _     _ _      _          _             _ _
// / _\ __ _| | |_  | (_) ___| | __  ___| |_ _   _  __| (_) ___
// \ \ / _` | | __| | | |/ __| |/ / / __| __| | | |/ _` | |/ _ \
// _\ \ (_| | | |_  | | | (__|   <  \__ \ |_| |_| | (_| | | (_) |
// \__/\__,_|_|\__| |_|_|\___|_|\_\ |___/\__|\__,_|\__,_|_|\___/
//
//==============================================================================
// Robert Claridge
//==============================================================================

var resultsArr = [];
for (let i = 0; i < 4; i++) {
  resultsArr.push("");
}

const lobsterAnswers = ["d", "c", "d", "d", "d"];
const catAnswers = ["b", "b", "b", "b", "b"];
const chameleonAnswers = ["a", "d", "a", "a", "a"];
const DolphinAnswers = ["c", "a", "c", "c", "c"];

var quad1 = 0;
var quad2 = 0;
var quad3 = 0;
var quad4 = 0;

var percent1 = 0;
var percent2 = 0;
var percent3 = 0;
var percent4 = 0;

var learnimal = "fish";

$("input[type='radio']").change(function (e) {
  let answer = e.currentTarget.id.slice(-1); // get's letter of answer
  let boxNum = Number(e.currentTarget.name.match(/\d+/)[0]) + 1; // get's number of box
  resultsArr[boxNum - 2] = answer; // adds answer to results array
  // console.log(answer);
  // console.log(resultsArr);

  let box = "#box" + boxNum;

  $("html,body").animate(
    {
      scrollTop: $(box).offset().top - 100,
    },
    400
  );
});

const submitAnswers = () => {
  // check that all the questions have been answered
  if (resultsArr.includes("")) {
    console.log("incomplete");
    $("#incomplete").removeClass("hide");
    $("#resultsBox").removeClass("hide");
    $("#proTips").addClass("hide");
    $("html,body").animate(
      {
        scrollTop: $("#resultsBox").offset().top - 100,
      },
      400
    );
    trackQuizOutcome("fish");
    return;
  } else {
    console.log("complete");
    $("#incomplete").addClass("hide");
    $("#career1").addClass("hide");
    $("#career2").addClass("hide");
    $("#career3").addClass("hide");
    $("#career4").addClass("hide");
    $("#proTips").addClass("hide");
  }

  let lobster = 0;
  let cat = 0;
  let chameleon = 0;
  let dolphin = 0;

  for (let i = 0; i < resultsArr.length; i++) {
    if (resultsArr[i] == lobsterAnswers[i]) {
      lobster++;
    } else if (resultsArr[i] == catAnswers[i]) {
      cat++;
    } else if (resultsArr[i] == chameleonAnswers[i]) {
      chameleon++;
    } else {
      dolphin++;
    }
  }

  let animals = { lobster, cat, chameleon, dolphin };
  // compare lobtser, cat, chameleon, dolphin and find the largest
  let largestVar = Object.keys(animals).reduce((a, b) => (animals[a] > animals[b] ? a : b));

  learnimal = largestVar;
  console.log(lobster, cat, chameleon, dolphin);
  console.log(`The largest animal is: ${largestVar}`);
  trackQuizOutcome(learnimal);
  renderSuggestions(learnimal);

  if (largestVar == "lobster") {
    $("#career1").removeClass("hide");
    $("#proTips").removeClass("hide");
  } else if (largestVar == "cat") {
    $("#career2").removeClass("hide");
    $("#proTips").removeClass("hide");
  } else if (largestVar == "chameleon") {
    $("#career3").removeClass("hide");
    $("#proTips").removeClass("hide");
  } else if (largestVar == "dolphin") {
    $("#career4").removeClass("hide");
    $("#proTips").removeClass("hide");
  }

  $("#resultsBox").removeClass("hide");
  $("html,body").animate(
    {
      scrollTop: $("#resultsBox").offset().top - 100,
    },
    400
  );

  console.log("submit");
};

// Learning suggestions (SVG icons + HTML-friendly bodies)
const suggestionItems = [
  {
    key: "scroll-swap",
    title: "Scroll Swap",
    iconSrc: "images/icons/scroll-swap.svg",
    body:
      "Swap 5 minutes of doom-scrolling with nano-learning. Download the <a href='https://www.linkedin.com/learning/mobile' target='_blank'>LinkedIn Learning app</a> " +
      "& try: <a href='https://www.linkedin.com/learning-login/share?account=2153578&forceAccount=false&redirect=https%3A%2F%2Fwww.linkedin.com%2Flearning%2Fnano-tips-for-using-excel-with-kat-norton%3Ftrk%3Dshare_ent_url%26shareId%3D1b0maBnmSmSGJDWm3Q4iag%253D%253D' target='_blank'>Excel</a>, <a href='https://www.linkedin.com/learning-login/share?account=2153578&forceAccount=false&redirect=https%3A%2F%2Fwww.linkedin.com%2Flearning%2Fnano-tips-for-more-effective-meetings-with-shade-zahrai%3Ftrk%3Dshare_ent_url%26shareId%3DGf%252Fr1wS%252FQFCSRJtKSDJkRw%253D%253D' target='_blank'>Good Meetings</a>, <a href='https://www.linkedin.com/learning-login/share?account=2153578&forceAccount=false&redirect=https%3A%2F%2Fwww.linkedin.com%2Flearning%2Fnano-tips-to-boost-productivity-with-shade-zahrai%3Ftrk%3Dshare_ent_url%26shareId%3DPWKqctsPTlaI2kH%252B0NBxDw%253D%253D' target='_blank'>Boost Productivity</a>.",
  },
  {
    key: "social",
    title: "Social Learning",
    iconSrc: "images/icons/social.svg",
    body:
      "Post your wins on <a href='https://engage.cloud.microsoft/main/org/laingorourke.com.au/groups/eyJfdHlwZSI6Ikdyb3VwIiwiaWQiOiI5ODU5MjcxODg0OCJ9/all' target='_blank'>Viva Engage</a>. Host a lunch-and-learn. Join a <a href='https://lorprod.workzonehr.cfapps.eu10.hana.ondemand.com/site#workzone-home&/home/PE8Rb2BDPHFILlJ42XOfUH' target='_blank'>Guild</a>. " +
      "Find a mentor or shadow someone to learn on the job.",
  },
  {
    key: "move",
    title: "Learning on the Move",
    iconSrc: "images/icons/move.svg",
    body: "Make your commute count with podcasts and bite-sized book summaries from <a href='https://www.linkedin.com/learning/instructors/blinkist' target='_blank'>Blinkist</a> and <a href='https://www.linkedin.com/learning/instructors/getabstract' target='_blank'>GetAbstract</a>.",
  },
  {
    key: "certs",
    title: "Level Up with Certifications",
    iconSrc: "images/icons/certs.svg",
    body: "Get certified in <a href='https://www.linkedin.com/learning/topics/toastmasters-international' target='_blank'>public speaking</a>, <a href='https://www.linkedin.com/learning/topics/microsoft-18674489' target='_blank'>Microsoft Apps</a>, <a href='https://www.linkedin.com/learning/topics/autodesk' target='_blank'>Autodesk</a>, <a href='https://www.linkedin.com/learning/topics/six-sigma-certification' target='_blank'>Six Sigma</a>, <a href='https://www.linkedin.com/learning/topics/project-management-institute-pmi-14129084' target='_blank'>Project Management</a>, and <a href='https://www.linkedin.com/learning/browse/certifications' target='_blank'>much more</a>.",
  },
  {
    key: "roleplay",
    title: "Roleplay (with AI)",
    iconSrc: "images/icons/roleplay.svg",
    body: "Practice tricky scenarios—feedback, pay rise negotiations, saying no—safely with <a href='https://www.linkedin.com/learning/role-play/scenarios/new' target='_blank'>AI here</a>.",
  },
  {
    key: "coach",
    title: "Learning Coach",
    iconSrc: "images/icons/coach.svg",
    body: "Not sure what to learn? Let an <a href='https://www.linkedin.com/learning/chatbot' target='_blank'>AI coach</a> map your next move. Still stuck? Ping the Talent Team.",
  },
];

// if the boxes are the same but the order changes, define per-animal order:
const suggestionOrder = {
  lobster: ["certs", "scroll-swap", "roleplay", "coach", "move", "social"],
  cat: ["scroll-swap", "roleplay", "move", "coach", "certs", "social"],
  chameleon: ["roleplay", "scroll-swap", "move", "certs", "coach", "social"],
  dolphin: ["social", "roleplay", "coach", "scroll-swap", "move", "certs"],
};

const careerByAnimal = {
  lobster: "#career1",
  cat: "#career2",
  chameleon: "#career3",
  dolphin: "#career4",
};

// Render suggestions (uses SVG <img> and allows hyperlinks)
function renderSuggestions(animal) {
  $("#resultsBox .suggestions-grid").remove();

  const order = suggestionOrder[animal] || [];
  const byKey = Object.fromEntries(suggestionItems.map((i) => [i.key, i]));

  const $grid = $('<div class="suggestions-grid" />');
  order.forEach((key) => {
    const item = byKey[key];
    if (!item) return;

    const $card = $('<div class="suggestion" />');

    const $iconWrap = $('<div class="suggestion-icon" aria-hidden="true"/>');
    if (item.iconSrc) {
      $iconWrap.append(
        $("<img>", {
          src: item.iconSrc,
          alt: "",
          loading: "lazy",
          decoding: "async",
        })
      );
    }
    $card.append($iconWrap);

    const $content = $('<div class="suggestion-content" />')
      .append($("<h4/>").text(item.title))
      .append($("<p/>").html(item.body));

    $content.find("a").attr({ target: "_blank", rel: "noopener noreferrer" });

    $card.append($content);
    $grid.append($card);
  });

  $(careerByAnimal[animal]).append($grid);
}

// function getLabel(id) {
//    return $("#"+id).next("label").html();
// }

// footer
$(".saltlick").hover(
  function () {
    $(".zilla").addClass("show");
  },
  function () {
    $(".zilla").removeClass("show");
  }
);

function sendEmail(eSubject, eBody) {
  console.log("emailCodeword");
  var titleStr = "Your Leadership Style";
  var bodyStr =
    "Hi Team,%0D%0A%0D%0ACheck out my Leadership style:" +
    "%0D%0A%0D%0ASupporting: " +
    percent1 +
    "%" +
    "%0D%0ACoaching: " +
    percent2 +
    "%" +
    "%0D%0ADelegating: " +
    percent3 +
    "%" +
    "%0D%0ADirecting: " +
    percent4 +
    "%";
  window.open(
    "mailto:nick.blasdale@icloud.com;HLindsay@laingorourke.com;rclaridge@laingorourke.com?subject=" +
      titleStr +
      "&body=" +
      bodyStr
  );
}

function goVivaEngage() {
  window.open("https://engage.cloud.microsoft/main/org/laingorourke.com.au/feed", "_blank");
}

function showModal(whichModal) {
  if (whichModal === 1) {
    copyRichText();
    document.getElementById("shareModal").style.display = "block";
  } else {
    copyResultImageToClipboard();
    document.getElementById("shareModal2").style.display = "block";
  }
}

function closeModal() {
  document.getElementById("shareModal").style.display = "none";
  document.getElementById("shareModal2").style.display = "none";
}

// Close modal when clicking outside
window.onclick = function (event) {
  const modal = document.getElementById("shareModal");
  const modal2 = document.getElementById("shareModal2");
  if (event.target == modal || event.target == modal2) {
    closeModal();
  }
};

// Image variant cycling: default 3 -> 2 -> base -> 3 ...
const IMAGE_VARIANTS = ["3", "2", "base"];
if (!document.body.dataset.imageVariant) {
  document.body.dataset.imageVariant = "3"; // default
}

function cycleImageStyle() {
  const current = document.body.dataset.imageVariant || "3";
  const idx = IMAGE_VARIANTS.indexOf(current);
  const next = IMAGE_VARIANTS[(idx + 1) % IMAGE_VARIANTS.length];
  document.body.dataset.imageVariant = next;
  swapInlineAnimalImages(next);
  updateShuffleButton(next);
}

function swapInlineAnimalImages(variant) {
  document.querySelectorAll("img[src]").forEach((img) => {
    const src = img.getAttribute("src");
    const m =
      src && src.match(/(.*\/images\/)(cat|chameleon|dolphin|lobster|fish)(3|2)?\.(png|svg)$/i);
    if (!m) return;
    const prefix = m[1];
    const animal = m[2];
    const ext = m[4];
    const suffix = variant === "base" ? "" : variant;
    const nextSrc = `${prefix}${animal}${suffix}.${ext}`;
    if (nextSrc !== src) img.setAttribute("src", nextSrc);
  });
}

function updateShuffleButton(variant) {
  const btn = document.getElementById("shuffleStyleBtn");
  if (!btn) return;
  btn.setAttribute("aria-pressed", variant !== "3");
  btn.setAttribute(
    "title",
    `Change image style (current: ${variant === "base" ? "original" : "variant " + variant})`
  );
}

document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("shuffleStyleBtn");
  if (btn) {
    btn.addEventListener("click", cycleImageStyle);
    updateShuffleButton(document.body.dataset.imageVariant || "3");
  }
  swapInlineAnimalImages(document.body.dataset.imageVariant || "3");
});

async function copyRichText() {
  let html = document.querySelector("#shareContentChameleon").innerHTML;
  let text = "https://solensa.github.io/learnimals/images/chameleon2.png";

  if (learnimal == "dolphin") {
    html = document.querySelector("#shareContentDolphin").innerHTML;
    text = "https://solensa.github.io/learnimals/images/dolphin2.png";
  } else if (learnimal == "lobster") {
    html = document.querySelector("#shareContentLobster").innerHTML;
    text = "https://solensa.github.io/learnimals/images/lobster2.png";
  } else if (learnimal == "cat") {
    html = document.querySelector("#shareContentCat").innerHTML;
    text = "https://solensa.github.io/learnimals/images/cat2.png";
  } else if (learnimal == "fish") {
    html = document.querySelector("#shareContentFish").innerHTML;
    text = "https://solensa.github.io/learnimals/images/fish2.png";
  }
  try {
    await navigator.clipboard.write([
      new ClipboardItem({
        "text/html": new Blob([html], { type: "text/html" }),
        "text/plain": new Blob([text], { type: "text/plain" }),
      }),
    ]);
    // alert("Copied formatted text to clipboard!");
  } catch (err) {
    console.error("Copy failed", err);
    // alert("Failed to copy. Please try again.");
  }
}

// A function that copies an image from the copy folder to a users clip board so that they can paste it in Microsoft teams
// Copy result image to clipboard (PNG). Falls back to opening the image if unsupported.
async function copyResultImageToClipboard() {
  console.log(learnimal);
  const imageByAnimal = {
    chameleon: "images/copy/chameleon-copy2.png",
    dolphin: "images/copy/dolphin-copy2.png",
    lobster: "images/copy/lobster-copy2.png",
    cat: "images/copy/cat-copy2.png",
    fish: "images/copy/fish-copy2.png",
  };

  const animal = typeof learnimal !== "undefined" ? learnimal : null;
  const url = animal ? imageByAnimal[animal] : null;

  if (!url) {
    console.warn("No copy image available for result:", animal);
    return false;
  }

  if (!navigator.clipboard || typeof ClipboardItem === "undefined") {
    // Fallback: open image so user can copy manually
    window.open(url, "_blank", "noopener,noreferrer");
    return false;
  }

  try {
    const res = await fetch(url, { cache: "no-cache" });
    if (!res.ok) throw new Error(`Failed to fetch image: ${res.status}`);
    const blob = await res.blob(); // e.g., image/png

    await navigator.clipboard.write([new ClipboardItem({ [blob.type || "image/png"]: blob })]);
    return true;
  } catch (err) {
    console.error("Copy image failed", err);
    // Fallback: open image so user can copy manually
    window.open(url, "_blank", "noopener,noreferrer");
    return false;
  }
}

// Google Analytics tracking function
function trackQuizOutcome(outcomeCode) {
  // Sends the quiz result to Google Analytics
  gtag("event", "quiz_result", {
    result: outcomeCode, // e.g. cat, dolhpine etc
    quiz_name: "learning_quiz", // optional but useful
  });
}
