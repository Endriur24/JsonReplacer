# JsonReplacer
replace elements on webpage with content from json file

#V2 Update
The script works recursively and you can apply more cavities using arrays and elements that have IDs.

The JsonReplacer script was created to replace all occurrences of double curly brackets in an HTML file with values corresponding to keys in a JSON file.

The script takes two parameters: the URL of the JSON file and the ID of the HTML element containing the template to be replaced.

The script first retrieves the JSON file from the indicated URL using the fetch interface. It then searches for the HTML element with the indicated ID and retrieves its innerHTML property.

The script then uses JSON.parse to parse the JSON file into a JavaScript object. 

Finally, the script replaces the innerHTML of the original HTML element with the modified template, and the page is updated with the new HTML.

The script was created for experimental and educational purposes and is not recommended for use on public websites.

https://cdn.jsdelivr.net/gh/Endriur24/JsonReplacer@main/JsonReplacer.js
