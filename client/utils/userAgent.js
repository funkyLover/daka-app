
const defineTheme = function () {
  // iOS detection from: http://stackoverflow.com/a/9039885/177710
  var userAgent = navigator.userAgent || navigator.vendor || window.opera;
  if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
    return 'ios';
  }
  return 'material';
}

window.appTheme = defineTheme()
