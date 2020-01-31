//提交回复
function post() {
    let questionId = $("#question_id").val();
    let content = $("#comment-content").val();

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
            if (response.code === 200) {
                window.location.reload();
            } else {
                if (response.code === 2003) {
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

//展开二级回复
function collapseComments(e) {
    var id = e.getAttribute("data-id");
    var comments = $("#comment-" + id);

    //获取二级回复展开状态
    var collapse = e.getAttribute("data-collapse");
    if (collapse) {
        //折叠二级回复
        comments.removeClass("in");
        e.removeAttribute("data-collapse");
        e.classList.remove("active");
    } else {
        //展开二级回复
        comments.addClass("in");
        //标记二级回复展开状态
        e.setAttribute("data-collapse", "in");
        e.classList.add("active");
    }
}