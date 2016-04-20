$(document).ready(function () {

    var apikey = 'wUoQDRVc32IyOToAIVKFzrrfNvEfLUbbdGh3VhzNntgXsW0RBN';

    $('#get-cats-button').click(function () {

        $.ajax({
            url: 'http://api.tumblr.com/v2/blog/' + 'cat-shaming' + '/posts',
            method: 'get',
            // Tärkeää Tumblrissa!
            dataType: "jsonp",
            data: ({
                api_key: apikey
            }),

            success: function (data) {
                console.log(data);

                var responseBlog = data.response.blog;
                var responsePosts = data.response.posts;

                $('#title_tumblr').html(responseBlog.title);

                // Luuppaa postauksien läpi
                $.each(responsePosts, function (key, value) {
                    // Hae vain postaukset joiden type on "phot"
                    if (value.type === "photo") {
                        $.each(value.photos, function (k, v) {
                            $('#cat-photos').append(
                                '<img src="' + v.original_size.url + '" width="300" height="300" />'
                            );
                        });
                    }
                });
            }
        });
    });
});