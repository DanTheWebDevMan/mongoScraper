
//make api call to backend showing all articles
$(document).ready(function () {
    fetch(
        "/articles"
    ).then(res => res.json())
        .then(articles => {
            console.log(articles);
            articles.forEach(article => {
                //creating article in html
                const articleContainer = $("<div></div>");
                const headline = $("<p>" + article.headline + "</p>");
                const summary = $("<p>" + article.summary + "</p>");
                const url = $(`<a href= "https://www.nytimes.com${article.url}">Go to article:</a>`);
                //text area for user to comment
                const textArea = $("<textarea></textarea>");
                const addButton = $("<button class=\"submit\" >Submit Comment</button>");
                const commentSection = $("<div></div>");
                //taking all comment for specific article and appending to comment section
                article.comment.forEach(comment => {
                    commentSection.append(`<p>${comment.body}</p>`)
                })
                //on click event (e), grabbing value from text area and posting into DB
                $(addButton).on("click", function (e) {
                    const comments = $(this).siblings("textarea").val();
                    const id = article._id

                    fetch("/articles/" + id, {
                        method: "post",
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({
                            body: comments
                        })
                    }).then(() => {
                        //reloads page
                        window.location.reload();
                    })
                });

                //appending elements
                articleContainer.append(headline);
                articleContainer.append(summary);
                articleContainer.append(url);
                articleContainer.append(commentSection);
                articleContainer.append(textArea);
                articleContainer.append(addButton);
                $("#articles").append(articleContainer);
            })
        })
});