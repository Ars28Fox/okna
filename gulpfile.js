const gulp = require('gulp');
const requireDir = require('require-dir');
const tasks = requireDir('./tasks');

exports.svg_css = tasks.svg_css;
exports.fonts = tasks.fonts;
exports.style = tasks.style;
exports.js = tasks.js;
exports.html = tasks.html;
exports.rastr = tasks.rastr;
exports.svg_sprite = tasks.svg_sprite;
exports.bs_html = tasks.bs_html;
exports.watch = tasks.watch;

exports.default = gulp.parallel(
  exports.svg_css,
  exports.fonts,
  exports.style,
  exports.js,
  exports.rastr,
  exports.svg_sprite,
  exports.html,
  exports.bs_html,
  exports.watch
)
