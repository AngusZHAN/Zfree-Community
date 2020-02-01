//提交回复
function post() {
    let questionId = $("#question_id").val();
    let content = $("#comment-content").val();
    comment2Target(questionId, 1, content);
}

function comment2Target(targetId, type, content) {
    if (!content) {
        alert("内容不能为空");
        return;
    }

    $.ajax({
        type: "POST",
        url: "/comment",
        contentType: "application/json",
        data: JSON.stringify({
            "parentId": targetId,
            "content": content,
            "type": type,
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

function comment(e) {
    let commentId = e.getAttribute("data-id");
    let content = $("#input-" + commentId).val();
    comment2Target(commentId, 2, content);
}

//展开二级回复
function collapseComments(e) {
    let id = e.getAttribute("data-id");
    let comments = $("#comment-" + id);

    //获取二级回复展开状态
    let collapse = e.getAttribute("data-collapse");
    if (collapse) {
        //折叠二级回复
        comments.removeClass("in");
        e.removeAttribute("data-collapse");
        e.classList.remove("active");
    } else {
        $.getJSON("/comment/" + id, function (data) {
            let commentBody = $("comment-body-" + id);
            let items = [];

            $.each(data, function (comment) {
                let c = $("<div/>", {
                    "class": "col-lg-12 col-md-12 col-sm-12 col-xs-12 comments",
                    html: comment.content,
                });
                items.push(c);
            });

            commentBody.append($("<div/>", {
                "class": "col-lg-12 col-md-12 col-sm-12 col-xs-12 collapse sub-comments",
                "id": "comment-" + id,
                html: items.join(""),
            }));

            //展开二级回复
            comments.addClass("in");
            //标记二级回复展开状态
            e.setAttribute("data-collapse", "in");
            e.classList.add("active");
        });
    }
}