// $(document).ready(function() {
//   $("div.cookie").hide(), function() {
//     $("div#imgA").click(function() {
//       $("div#A").show.();
//   });
//
// });

$(document).ready(function() {
  $("div.cookie").hide();
  $("div.totalwrapper").hide();

  $("#imgA").click(function() {
    $("#A").toggle();
   });

  $("#imgB").click(function() {
    $("#B").toggle();
  });

  $("#imgC").click(function() {
    $("#C").toggle();
  });

  var countA = Cookies.get("cookieA");
  if (countA === undefined) {
      var countA = 0;
    }
    else {
      countA = parseInt(countA);
    }

  $("#CountA").html(countA);

  $("div#A.minus").click(function() {
      if (countA !== 0) {
      countA = parseInt(countA) - 1,
      Cookies.set("cookieA",countA),
      $("#CountA").html(countA);
    }
  });

    $("div#A.plus").click(function() {
      countA = parseInt(countA) + 1,
      Cookies.set("cookieA",countA),
      $("#CountA").html(countA);
  });

  var countB = Cookies.get("cookieB");
  if (countB === undefined) {
      var countB = 0;
    }
    else {
      countB = parseInt(countB);
    }

  $("#CountB").html(countB);

  $("div#B.minus").click(function() {
      if (countB !== 0) {
      countB = parseInt(countB) - 1,
      Cookies.set("cookieB",countB),
      $("#CountB").html(countB);
    }
  });

    $("div#B.plus").click(function() {
      countB = parseInt(countB) + 1,
      Cookies.set("cookieB",countB),
      $("#CountB").html(countB);
  });

  var countC = Cookies.get("cookieC");
  if (countC === undefined) {
      var countC = 0;
    }
    else {
      countC = parseInt(countC);
    }

  $("#CountC").html(countC);

  $("div#C.minus").click(function() {
      if (countC !== 0) {
      countC = parseInt(countC) - 1;
      Cookies.set("cookieC",countC),
      $("#CountC").html(countC);
    }
  });

    $("div#C.plus").click(function() {
      countC = parseInt(countC) + 1,
      Cookies.set("cookieC",countC),
      $("#CountC").html(countC);
  });

  


});
