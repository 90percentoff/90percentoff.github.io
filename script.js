$(function () {
  // jQuery 範例：點擊事件 + 動畫效果。
  $("#toggle-btn").on("click", function () {
    $("#more-info").slideToggle(250);
  });

  // Ajax + JSON 範例：不重新整理頁面，從伺服器讀取 data.json。
  $("#load-btn").on("click", function () {
    $("#load-status").text("資料讀取中……");
    $("#skill-list").empty();

    $.getJSON("./data.json")
      .done(function (data) {
        $("#load-status").text("讀取成功！「" + data.title + "」：");
        data.skills.forEach(function (skill) {
          $("<li>").text(skill).appendTo("#skill-list");
        });
      })
      .fail(function () {
        $("#load-status").text("讀取失敗。請透過本機伺服器或 GitHub Pages 開啟網站，而不是直接雙擊 HTML。");
      });
  });
});
