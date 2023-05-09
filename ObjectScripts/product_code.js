let partCode = "YSL:1234-F";
let part = parsePartCode(partCode);

function parsePartCode(partCode) {
    let supplierCode = getSupplier(partCode);
    let productNumber = getProductNumber(partCode);
    let size = getSize(partCode);
    
    return {
        supplierCode,
        productNumber,
        size
    }
}

function getSupplier(partCode) { //all characters before :
    let colonPos = partCode.indexOf(":");
    let supplierCode = partCode.substring(0, colonPos);

    return supplierCode;
}

function getProductNumber(partCode){ //all characters between : and -
    let colonPos = partCode.indexOf(":");
    let dashPos = partCode.indexOf("-");
    let productNumber = partCode.substring(colonPos + 1, dashPos);

    return productNumber;
}

function getSize(partCode) { //all characters after -
    let dashPos = partCode.indexOf("-");
    let size = partCode.substring(dashPos + 1);

    return size;
}

console.log("Supplier: " + part.supplierCode + " Product Number: " + part.productNumber + " Size: " + part.size);
