function getter() {
  const html = document;

  var imageArray = [];

  $(html)
    .find(".product-wrap")
    .each(function() {
      var src = $(this)
        .find("img")
        .attr("src");
      srcArray.push(src);
    });

  return imageArray;
}
