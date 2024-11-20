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
for (let i = 0; i < 12; i++) {
  resultsArr.push("");
}

const quad4Answers = [
  "a",
  "d",
  "c",
  "b",
  "c",
  "b",
  "a",
  "c",
  "c",
  "b",
  "a",
  "c",
];
const quad2Answers = [
  "b",
  "a",
  "a",
  "d",
  "b",
  "d",
  "c",
  "b",
  "b",
  "d",
  "c",
  "a",
];
const quad1Answers = [
  "c",
  "c",
  "d",
  "a",
  "d",
  "a",
  "b",
  "d",
  "d",
  "a",
  "b",
  "d",
];

var quad1 = 0;
var quad2 = 0;
var quad3 = 0;
var quad4 = 0;

var percent1 = 0;
var percent2 = 0;
var percent3 = 0;
var percent4 = 0;

$("input[type='radio']").change(function (e) {
  let answer = e.currentTarget.id.slice(-1);
  let boxNum = Number(e.currentTarget.name.match(/\d+/)[0]) + 1;

  resultsArr[boxNum - 2] = answer;

  // console.log(resultsArr);

  let box = "#box" + boxNum;
  if (box == "#box13") {
    $("html,body").animate(
      {
        scrollTop: $("#submit1").offset().top - 100,
      },
      400
    );
  } else {
    $("html,body").animate(
      {
        scrollTop: $(box).offset().top - 100,
      },
      400
    );
  }
});

const submitAnswers = () => {
  quad1 = 0;
  quad2 = 0;
  quad3 = 0;
  quad4 = 0;

  for (let i = 0; i < resultsArr.length; i++) {
    if (resultsArr[i] == quad1Answers[i]) {
      quad1++;
    } else if (resultsArr[i] == quad2Answers[i]) {
      quad2++;
    } else if (resultsArr[i] == quad4Answers[i]) {
      quad4++;
    } else {
      quad3++;
    }
  }

  // let alpha1 = quad1 / 12;
  // let alpha2 = quad2 / 12;
  // let alpha3 = quad3 / 12;
  // let alpha4 = quad4 / 12;
  // // have to switch alphas because quiz designer labled quadrants from bottom right anti-clockwise !?!
  // $("#quad1").css("background-color", "rgba(47,45,137," + alpha1 + ")");
  // $("#quad2").css("background-color", "rgba(47,45,137," + alpha2 + ")");
  // $("#quad3").css("background-color", "rgba(47,45,137," + alpha3 + ")");
  // $("#quad4").css("background-color", "rgba(47,45,137," + alpha4 + ")");

  // // calc %'s and put it in the relevant quadrant
  // percent1 = Math.round(alpha1 * 100);
  // percent2 = Math.round(alpha2 * 100);
  // percent3 = Math.round(alpha3 * 100);
  // percent4 = Math.round(alpha4 * 100);
  // document.getElementById("q1").innerHTML = percent1 + "%";
  // document.getElementById("q2").innerHTML = percent2 + "%";
  // document.getElementById("q3").innerHTML = percent3 + "%";
  // document.getElementById("q4").innerHTML = percent4 + "%";


  let randomNumber = Math.floor(Math.random() * 3);
  if (randomNumber == 0) {
    $("#career1").removeClass("hide");
  } else if (randomNumber == 1) {
    $("#career2").removeClass("hide");
  } else {
    $("#career3").removeClass("hide");
  }
  console.log(randomNumber)

  $("#resultsBox").removeClass("hide");
  $("html,body").animate(
    {
      scrollTop: $("#resultsBox").offset().top - 100,
    },
    400
  );

  console.log("submit");
};

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

// Switch between forms
// $(function($) {
//   var whichBtn = 1;
//   $('#appFeedback').click(function() {
//     if (whichBtn == 2) {
//       console.log(whichBtn);
//       $('#appBox').fadeIn().animate({
//         left: 0
//       });
//       $('#intBox').fadeOut().animate({
//         left: ($('#appBox').width())
//       });
//       // $('#appBox').show("slide");
//       // $('#intBox').hide('slide');
//       whichBtn = 1;
//     }
//   });
//   $('#intFeedback').click(function() {
//     if (whichBtn == 1) {
//       console.log(whichBtn);
//       $('#appBox').fadeOut().animate({
//         left: -($('#appBox').width())
//       });
//       $('#intBox').fadeIn().animate({
//         left: 0
//       });
//       // $('#intBox').show("slide");
//       // $('#appBox').hide('slide');
//       whichBtn = 2;
//     }
//   });

//   $('#submit1').click(function(){
//     console.log('email');
//     var emailSubject = "Application Feedback";
//     // var bodySubject = $('#emailBox').html($('textarea').val().replace(/\n/g, '<br>'));
//     var bodySubject = $('#emailBox').val();
//     // bodySubject = bodySubject[0].defaultValue

//     // sendEmail(emailSubject, bodySubject);
//     // window.open('mailto:test@example.com?subject=' + emailSubject + '&body=' + encodeURIComponent(bodySubject));
//     sendEmail(emailSubject, bodySubject);
//   });
//   $('#submit2').click(function(){
//     console.log('email2');
//     var emailSubject = "Application Feedback";
//     // var bodySubject = $('#emailBox2').html($('textarea').val().replace(/\n/g, '<br>'));
//     var bodySubject = $('#emailBox2').val();
//     // window.open('mailto:test@example.com?subject=' + emailSubject + '&body=' + bodySubject);
//     sendEmail(emailSubject, bodySubject);
//   });
// });

function sendEmail(eSubject, eBody) {
  // var outlookApp = new ActiveXObject("Outlook.Application");
  // var nameSpace = outlookApp.getNameSpace("MAPI");
  // mailFolder = nameSpace.getDefaultFolder(6);
  // mailItem = mailFolder.Items.add('IPM.Note.FormA');
  // mailItem.Subject = eSubject;
  // mailItem.To = "me@me.com";
  // mailItem.HTMLBody = eBody;
  // mailItem.display(0);

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
  // var bodyStr = "Please find a link back to your personal Atom dashboard below:  %0D%0A  %0D%0A http://atom.machine.group/results.html?" + userCodeword;
  // var bodyStr = eBody.replace(/\n/g, "%0D%0A");
  window.open(
    "mailto:nick.blasdale@icloud.com;HLindsay@laingorourke.com;rclaridge@laingorourke.com?subject=" +
    titleStr +
    "&body=" +
    bodyStr
  );
}
