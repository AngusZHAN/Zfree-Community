function post() {
    var questionId = $("#question_id").val();
    var content = $("#comment-content").val();

    if (!content) {
        alert("内容不能为空");
        return;
    }

    $.ajax({
        type: "POST",
        url: "/comment",
        contentType: "application/json",
        data: JSON.stringify({
            "parentId": questionId,
            "content": content,
            "type": 1,
        }),
        success: function (response) {
            if (response.code == 200) {
                window.location.reload();
            } else {
                if (response == 2003) {
                    var isAccepted = confirm(response.message);
                    if (isAccepted) {
                        window.open("https://github.com/login/oauth/authorize?client_id=a384df0d388b6611bfda&redirect_uri=http://localhost:9517/callback&scope=user&state=1")
                        window.localStorage.setItem("closable", true);
                    }
                } else {
                    alert(response.message);
                }
            }
        },
        dataType: "json"
    });
}