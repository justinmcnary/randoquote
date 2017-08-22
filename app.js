$('#quote-button').on('click', function() {
  $.getJSON('https://talaikis.com/api/quotes/random/', function(json) {
    let quote = JSON.stringify(json.quote);
    let author = json.author;
    let url = encodeURI(json.quote + ' -' + json.author);
    $('#quote').html(quote);
    $('#author').html(`- ${author}`);
    $('#twitter-div').html(`<a target="_blank" class="twitter-share-button"
  href="https://twitter.com/intent/tweet?text=${url}"><i class="fa fa-twitter-square" aria-hidden="true"></i>
Tweet</a>`);
  });
});
