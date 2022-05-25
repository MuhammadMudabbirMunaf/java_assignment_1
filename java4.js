var one, two, three = "allNumbers";

var legal = "legal characters:::" + "_" + "1" + "5" + "yen" + "$";
var illegal = "illegal charaacters:::" + "#" + "@" + "&" + "~" + "^";

var a = "<h3>a. A heading stating 'Rules for naming JS variables'</h3>";
var b = "<h3>b. Variable names can only contain ______, ______, ______ and ______. \n For example $my_1stVariable.</h3>";
var c = "<h3>c. Variables must begin with a ______, ______ or _____. \n For example $name, _name or name.</h3>";
var d = "<h3>d. Variable names are case __________. </h3>";
var e = "<h3>e. Variable names should not be JS _________.</h3>"

alert(legal);
alert(illegal);

document.write("<h1>" + legal + "</h1>");
document.write("<h1>" + illegal + "</h1>");
document.write(a, "\n" + b, "\n" + c, "\n" + d, "\n" + e,);