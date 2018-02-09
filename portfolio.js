$(document).ready(function() {
	$('a[href^="#"]').on("click", function(e) {
		e.preventDefault();

		var target = this.hash;
		var $target = $(target);

		$("html, body")
			.stop()
			.animate(
				{
					scrollTop: $target.offset().top
				},
				900,
				"swing",
				function() {
					window.location.hash = target;
				}
			);
	});
});
$("#submit").on("click", function() {
    $.ajax({
        url: "//formspree.io/milletjoanne@gmail.com", 
        method: "POST",
        data: {message: "hello!"},
        dataType: "json"
		});
});
$('#clear-form').on('click', function()
    {
        $("#contact").trigger("reset");
    });

    $('#clear-form').on('click', function()
    { 
        $('#contact').find('input:text, input:password, input:email').val('');
       });
;
