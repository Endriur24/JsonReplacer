# JsonReplacer
replace elements on webpage with content from json file

The JsonReplacer script was created to replace all occurrences of double curly brackets in an HTML file with values corresponding to keys in a JSON file.

The script takes two parameters: the URL of the JSON file and the ID of the HTML element containing the template to be replaced.

The script first retrieves the JSON file from the indicated URL using the fetch interface. It then searches for the HTML element with the indicated ID and retrieves its innerHTML property.

The script then uses JSON.parse to parse the JSON file into a JavaScript object. The object is then searched recursively, and for each key-value pair, the corresponding value is checked. If the value is a string, the script searches the template for occurrences of the key enclosed in double curly brackets and converts them into a value. If the value is. an array, the script checks if there is a corresponding HTML element with an ID that matches the key. If it exists, the HTML element is used as a template to create new HTML elements for each element in the array.

Finally, the script replaces the innerHTML of the original HTML element with the modified template, and the page is updated with the new HTML.

The script was created for experimental and educational purposes and is not recommended for use on public websites.

https://cdn.jsdelivr.net/gh/Endriur24/JsonReplacer@main/JsonReplacer.js
