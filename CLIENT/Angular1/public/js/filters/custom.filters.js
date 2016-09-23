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
        return function(item, option1, option2) {
            var filteredArr = [];
            var optionsArr = [];
            console.log(option1);
            if ((option1.veg == "" || option1.veg == undefined) && (option1.nonveg == "" || option1.nonveg == undefined) && (option1.eggie == "" || option1.eggie == undefined)) {
                return filteredArr = item;
            }
            _.forEach(item, function(category, index) {
                if (typeof option1 == "object") {
                    _.forEach(option1, function(value, key) {
                        if (category.categoryID == value) {
                            filteredArr.push(category);
                        }
                    });
                }
            });
            return filteredArr;
        };
    }).filter("itemPriceFilter", function($sce) {
        return function(item, minValue, maxValue) {
            var output = [];
            _.forEach(item, function(val, index) {
                if (minValue <= val.price && maxValue >= val.price) {
                    output.push(val);
                }
            })
            return output;
        };
    });