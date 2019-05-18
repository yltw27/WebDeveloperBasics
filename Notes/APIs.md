# APIs

* API = Application Programming Interface or Application Program Interface
* Interfaces for code/computers to talk to another
* Useful website: [ProgrammableWeb](https://www.programmableweb.com/api-university)
* Make HTTP request by Node: [Request - Simplified HTTP client](https://github.com/request/request)
    - `npm install request --save`

### Date Formats
* When we use the internet, we make HTTP request and get HTML back.
* API's dont's respond with HTML. HTML contains information about the structure of a app. API's respond with data, not structure. They use simpler data formats like **XML** and **JSON**.

##### XML
* Extended Markup Language
* XML is syntacticly similar to HTML, but it dose not describe presentation like HTML does.
```
//Put whatever tags you want.
<person>
    <age>18</age>
    <name>Tony Stark</name>
    <city>London</city>
</person>
```

##### JSON
* JavaScript Object Notation
* Json looks exactly like JS objects, but everything is a string.
```
{"person":{
    "age": "18",
    "name": "Jarvis",
    "city": "Bath"}
}
```

### HTTP request through Node
* Install request first `npm i request`
```
var request = require("request");
request("https://jsonplaceholder.typicode.com/users/1", function(err, res, body) {
    if(!err && res.statusCode == 200) {
        var parseData = JSON.parse(body);
        //2 ways to get data
        console.log(parseData["name"]);
        console.log(parseData.company.name);
        //concate var and string
        console.log(`${parseData.name} lives in ${parseData.address.city}`);
    }
});
```
