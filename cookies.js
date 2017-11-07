// $(document).ready(function() {
//   $("div.cookie").hide(), function() {
//     $("div#imgA").click(function() {
//       $("div#A").show.();
//   });
//
// });

$(document).ready(function() {

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

  $(".CountA").html(countA);

  $("div#A.minus").click(function() {
      if (countA !== 0) {
      countA = parseInt(countA) - 1,
      Cookies.set("cookieA",countA),
      $(".CountA").html(countA),
      total();
    }
  });

    $("div#A.plus").click(function() {
      countA = parseInt(countA) + 1,
      Cookies.set("cookieA",countA),
      $(".CountA").html(countA);
      total();
  });

  var countB = Cookies.get("cookieB");
  if (countB === undefined) {
      var countB = 0;
    }
    else {
      countB = parseInt(countB);
    }

  $(".CountB").html(countB);

  $("div#B.minus").click(function() {
      if (countB !== 0) {
      countB = parseInt(countB) - 1,
      Cookies.set("cookieB",countB),
      $(".CountB").html(countB),
      total();
    }
  });

    $("div#B.plus").click(function() {
      countB = parseInt(countB) + 1,
      Cookies.set("cookieB",countB),
      $(".CountB").html(countB),
      total();
  });

  var countC = Cookies.get("cookieC");
  if (countC === undefined) {
    var countC = 0;
    }
    else {
    countC = parseInt(countC);
    }

  $(".CountC").html(countC);

  $("div#C.minus").click(function() {
    if (countC !== 0) {
    countC = parseInt(countC) - 1;
    Cookies.set("cookieC",countC),
    $(".CountC").html(countC),
    total();
    }
  });

  $("div#C.plus").click(function() {
    countC = parseInt(countC) + 1,
    Cookies.set("cookieC",countC),
    $(".CountC").html(countC),
    total();
  });

  function total() {
    if (parseInt(countA) + parseInt(countB) + parseInt(countC) > 0)
    {
      $("div.totalwrapper").show()
    }
    else {
      $("div.totalwrapper").hide()
    }
  };

  total();

  $(".reset").click(function() {
    Cookies.set("cookieA",0),
    countA = 0,
    $(".CountA").html(countA),

    Cookies.set("cookieB",0),
    countB = 0,
    $(".CountB").html(countB),

    Cookies.set("cookieC",0),
    countC = 0,
    $(".CountC").html(countC),

    total();

  });

});
