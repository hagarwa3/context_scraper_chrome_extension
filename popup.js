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