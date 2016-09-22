angular
    .module('GPAPP')
    .filter("currency", function($sce) {
        return function(number, option1, option2) {
            if (isNaN(number) || number < 1) {
                return number;
            } else {
                option1 = option1 || "Rs";
                option2 = option2 || "";
                if (option2 !== "") {
                    return $sce.trustAsHtml('<span class="small">' + option1 + " <strong><em>" + number + "</em></strong> <mark>" + option2 + '</mark>');
                } else {
                    return $sce.trustAsHtml('<span class="small">' + option1 + " <strong><em>" + number + "</em></strong>");
                }
            }
        }
    }).filter("SectionFilter", function($sce) {
        return function(item, option1) {
            var filteredArr = [];
            var optionsArr = [];
            _.forEach(item, function(category, index) {
                if (typeof option1 == "object") {
                    _.forEach(option1, function(value, key) {
                        if (category.categoryID == value) {
                            filteredArr.push(category);
                        }
                    });
                } else {
                    console.log("ITEM ARR ", optionsArr.length);
                }
            });
            return filteredArr;
        };
    }).filter("itemPriceFilter", function($sce) {
        return function(item, minValue, maxValue) {
            console.log("ITEM", item, minValue);
            var output = [];
            _.forEach(item, function(val, index) {
                if (minValue <= val.price && maxValue >= val.price) {
                    output.push(val);
                }
            })
            return output;
        };
    });