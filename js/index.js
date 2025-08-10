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

var learnimal = "";

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
    return;
  } else {
    console.log("complete");
    $("#incomplete").addClass("hide");
    $("#career1").addClass("hide");
    $("#career2").addClass("hide");
    $("#career3").addClass("hide");
    $("#career4").addClass("hide");
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

  renderSuggestions(learnimal);

  $("#proTips").addClass("hide");

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
      "Trade 5 minutes of doom-scrolling with nano-learning by downloading the LinkedIn Learning app. " +
      "Try: <a href='www.google.com' target='_blank'>Excel</a>, Effective Meetings, Boost Productivity.",
  },
  {
    key: "social",
    title: "Social Learning",
    iconSrc: "images/icons/social.svg",
    body:
      "Post your wins on Viva Engage. Host a lunch-and-learn. Join a Guild. " +
      "Find a mentor or shadow someone to learn on the job.",
  },
  {
    key: "move",
    title: "Learning on the Move",
    iconSrc: "images/icons/move.svg",
    body: "Make your commute count with podcasts and bite-sized book summaries from Blinkist and GetAbstract.",
  },
  {
    key: "certs",
    title: "Level Up with Certifications",
    iconSrc: "images/icons/certs.svg",
    body: "Get certified in public speaking, Microsoft Apps, Autodesk, Six Sigma, Project Management, and more.",
  },
  {
    key: "roleplay",
    title: "Roleplay (with AI)",
    iconSrc: "images/icons/roleplay.svg",
    body: "Practice tricky scenarios—feedback, pay rise negotiations, saying no—safely with AI.",
  },
  {
    key: "coach",
    title: "Learning Coach",
    iconSrc: "images/icons/coach.svg",
    body: "Not sure what to learn? Let an AI coach map your next move. Still stuck? Ping the Talent Team.",
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

function showModal() {
  copyRichText();
  document.getElementById("shareModal").style.display = "block";
}

function closeModal() {
  document.getElementById("shareModal").style.display = "none";
}

// Close modal when clicking outside
window.onclick = function (event) {
  const modal = document.getElementById("shareModal");
  if (event.target == modal) {
    closeModal();
  }
};

async function copyRichText() {
  let html = document.querySelector("#shareContentChameleon").innerHTML;
  let text = "https://solensa.github.io/learnimals/images/chameleon.png";

  if (learnimal == "dolphin") {
    html = document.querySelector("#shareContentDolphin").innerHTML;
    text = "https://solensa.github.io/learnimals/images/dolphin.png";
  } else if (learnimal == "lobster") {
    html = document.querySelector("#shareContentLobster").innerHTML;
    text = "https://solensa.github.io/learnimals/images/lobster.png";
  } else if (learnimal == "cat") {
    html = document.querySelector("#shareContentCat").innerHTML;
    text = "https://solensa.github.io/learnimals/images/cat.png";
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
