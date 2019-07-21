var fs = require('fs');
module.exports = function replace() {
    var data1 = fs.readFileSync("../templates/template-overview.html");
    var data2 = fs.readFileSync("./data.json");
    var data3 = fs.readFileSync("../templates/template-cards.html");
    data1 = data1.toString();
    data3 = data3.toString();
    data2 = JSON.parse(data2);
    var res = "";
    var resx = "";
    for (var i = 0; i < data2.length; i++) {
        res = data3.replace(/{%IMAGE%}/g, data2[i].image);
        res = res.replace(/{%QUANTITY%}/g, data2[i].quantity);
        res = res.replace(/{%PRICE%}/g, data2[i].price);
        res = res.replace(/{%PRODUCTNAME%}/g, data2[i].productName);
        if(data2[i].organic === false){
            res = res.replace(/{%NOT_ORGANIC%}/g, "not-organic");
        }
        res = res.replace(/{%ID%}/g, data2[i].id);
        resx = resx.concat(res);
    }
    resx = data1.replace(/{%PRODUCT_CARDS%}/g, resx);
    return resx;
}