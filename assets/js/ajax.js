// Ajax request to fetch and render github stats
$.ajax({
	url: 'https://api.github.com/repos/anthonytedja/anthonytedja.github.io',
	method: 'GET',
	dataType: 'json',
	success: function(res) {
        $('#github-stars').text(res.stargazers_count);
        $('#github-forks').text(res.forks_count);
		}
	}
);
