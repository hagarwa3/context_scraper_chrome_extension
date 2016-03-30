worddict = {};
// var elements = document.getElementsByTagName('*');

// for (var i = 0; i < elements.length; i++) 
// {

//     var element = elements[i];

//     for (var j = 0; j < element.childNodes.length; j++) 
//     {
//         var node = element.childNodes[j];

//         //nodetype 3 is read-only, and means text
//         if (node.nodeType === 3)
//          {
//             var text = node.nodeValue;
//             //console.log(text);
//             var p=/(Kevin)/gi;
//             var replacedText = text.replace(p, '<span style="background-color:yellow;">$1</span>');

//             if (replacedText !== text) 
//             {
//                 //var replacementNode = document.createElement("span");
//                 //replacementNode.innerHTML =replacedText;
//                 //element.insertBefore(replacementNode, node);
//                 element.replaceChild(document.createTextNode(replacedText), node);

//             }
//         }
//     }
// }

var p=/(\()?(\d{3})(\))?(-|\s)?(\d{3})(-|\s)(\d{4})/g;
var b=document.body;
console.log(document.body.innerHTML.match(p));
document.body.innerHTML=document.body.innerHTML.replace(p,'<span style="background-color:yellow;">$1$2$3$4$5$6$7</span>');
console.log("hi");

var email1 = /([a-z][a-zA-Z0-9._-]{2,20}@)([a-zA-Z]+)(.([a-zA-Z]+))?(.([a-zA-Z]{2,6}))/g;
var email2 = /[a-z][a-zA-Z0-9._-]{2,20}(\s{1,3})?((\(|-|\[)at(\)|-|\]))(\s{1,3})?([a-zA-Z]+\.)?([a-zA-Z]+)(\s{1,3})?((\(|-|\[)dot(\)|-|\]))(\s{1,3})?([a-zA-Z]{2,6})/g;
var b=document.body;
console.log("hii");

var lalala1 = document.body.innerHTML.match(email1);
if(lalala1!=null)
{
console.log(lalala1);
console.log("hi1");
document.body.innerHTML=document.body.innerHTML.replace(email1,'<span style="background-color:green;">$1$2$3$4$5</span>');
console.log("hi3");
}
//else{
var lalala = document.body.innerHTML.match(email2);
console.log(lalala);
console.log("hi2");
document.body.innerHTML=document.body.innerHTML.replace(email2,'<span style="background-color:green;">'+lalala+'</span>');
console.log("hi4");
//}


var nameregex = /([A-Z]([a-z]{0,12})(.([A-Z].)?)?)(\s[A-Z][a-z]{0,12}(.|-)?([A-Z][a-z]{0,10}(.)?)?)?(\s[A-Z][a-z]{0,12}(.|-)?([A-Z][a-z]{0,10})?)/g;
var possiblenames= document.body.innerHTML.match(nameregex);
var newnames = [];
//console.log(possiblenames);
for (var j = 0; j < possiblenames.length; j++)
{
  if(!(/^[a-z]+$/i.test(possiblenames[j].slice(-1))))
    possiblenames[j] = possiblenames[j].slice(0,-1);
  if((/[,|_|:|;|<|>|&|$|%|#|@]+/i.test(possiblenames[j]))|| (possiblenames[j].length<5))
    var ok = 0;
  else
  	newnames.push(possiblenames[j])
}
//console.log(possiblenames);
possiblenames = newnames;
console.log(possiblenames);
var updatenames = []

for (var j = 0; j < possiblenames.length; j++)
{
	var spl = possiblenames[j].split(" ");
	var hmm = 1
	for (var i = 0; i<spl.length; i++)
	{
		if(spl[i] in worddict)
		{
			hmm = 0;
			break;
		}
	}
	if(hmm!=0)
		updatenames.push(possiblenames[j]);

}
possiblenames = updatenames;
// re1='((?:[a-z][a-z]+))' # Word 1
// re2='(((\\s+)?)'  # White Space 1
// re3='((\\(|-|\\[))' # Any Single Character 1
// re4='((?:[a-z][a-z]+))' # Word 2
// re5='((\\)|-|\\]))' # Any Single Character 2
// re6='(( ?))'  # Any Single Character 3
// re7='((?:[a-z][a-z1-9(.)]+))' # Word 3
// re8='(( )'  # Any Single Character 4
// re9='((\\(|-|\\[))' # Any Single Character 5
// re10='(dot)'  # Word 4
// re11='((\\)|-|\\]))'  # Any Single Character 6
// re12='( )'  # White Space 2
// re13='((edu|com))'  # Word 5
// re14 = '|@)'
// re15 = '|.)'
// email_pattern = re.compile(re1+((re2+re3+re4+re5+re6+re14))+re7+((re8+re9+re10+re11+re12+re15))+re13,re.IGNORECASE|re.DOTALL)

 // (\D?)
 //    (\d{3})     # area code is 3 digits (e.g. '800')
 //    (\D{,6}?)         # optional separator is any number of non-digits
 //    (\d{3})     # trunk is 3 digits (e.g. '555')
 //    (\D{,6}?)         # optional separator
 //    (\d{4})     # rest of number is 4 digits (e.g. '1212')
 //    \D{,6}?         # optional separator
 //    #(\d*)       # extension is optional and can be any number of digits

// var text = node.nodeValue;
//             //console.log(text);
//             var p=/(Kevin)/gi;
//             var replacedText = text.replace(p, '$1');

//             if (replacedText !== text) 
//             {
//               var replacementNode = document.createElement("span style='background-color:yellow;'");
//               replacementNode.innerHTML = linkify(replacedText);
//               element.insertBefore(replacementNode, node);
//               element.removeChild(node);