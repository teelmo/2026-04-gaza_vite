export function viewportSize(dimension) {
  const canUseVisualViewport = typeof visualViewport !== "undefined";
  let value;
  if(dimension == "height") {
      value = canUseVisualViewport ? visualViewport.height : window.innerHeight;
  } else if (dimension == "width") {
      value = canUseVisualViewport ? visualViewport.width : window.innerWidth;
  }
  return value;
}
export function isElementInOrAboveViewport(el) {
    var rect = el.getBoundingClientRect();
    return (
      rect.left >= 0 &&
      rect.bottom <= (viewportSize("height") + rect.height || document.documentElement.clientHeight + rect.height) &&
      rect.right <= (viewportSize("width") || document.documentElement.clientWidth)
    );
}

export function isElementVisibleInViewport(el) {
  var rect = el.getBoundingClientRect();
  return (
      rect.bottom >= 70
  )
}

export function videoRelativeCloseToViewport(el, buffer) {
  var rect = el.getBoundingClientRect();

  var top = rect.top
  var windowHeight = viewportSize("height")
  var elHeight = rect.height

  if(rect.left >= 0 && top < windowHeight * buffer && elHeight * buffer * -1 < top) {
      return true;
  } else {
      return false;
  }

}