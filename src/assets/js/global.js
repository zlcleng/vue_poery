window.resizePage = function(){
  var windowWidth =  document.documentElement.scrollWidth;
  var windowHeight =  document.documentElement.scrollHeight;
  var headerHeight = document.getElementById("header") === null?0:document.getElementById("header").offsetHeight;
  var footerHeight = document.getElementById("footer") === null?0:document.getElementById("footer").offsetHeight;
  document.getElementById("app").style.padding = headerHeight+"px 0 "+footerHeight+"px 0";
  document.getElementById("app").style.margin = headerHeight+"px 0 "+footerHeight+"px 0";
  document.getElementById("app").style.width = windowWidth+"px";
  document.getElementById("app").style.height = windowHeight+"px";
  document.body.style.display = "block";
  document.body.style.opacity = 1;
}
window.addEventListener("load",function(){
  window.resizePage();
});

window.addEventListener("resize",window.resizePage);
