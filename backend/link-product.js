var fs = require("fs");
module.exports = function replaceProduct(i){
    var data1 = fs.readFileSync("./templates/template-product.html");
    var data2 = fs.readFileSync("./backend/data.json");
    data1 = data1.toString();
    console.log(data1);
    data2 = JSON.parse(data2);
    var res = "";
    res = data1.replace(/{%IMAGE%}/g, data2[i].image);
    res = res.replace(/{%FROM%}/g, data2[i].from);
    res = res.replace(/{%NUTRIENTS%}/g, data2[i].nutrients);
    res = res.replace(/{%QUANTITY%}/g, data2[i].quantity);
    res = res.replace(/{%PRICE%}/g, data2[i].price);
    res = res.replace(/{%DESCRIPTION%}/g, data2[i].description);
    res = res.replace(/{%PRODUCTNAME%}/g, data2[i].productName);
    if(data2[i].organic === false){
        res = res.replace(/{%NOT_ORGANIC%}/g, "not-organic");
    }
    return res;
}