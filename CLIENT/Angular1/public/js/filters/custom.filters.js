angular
    .module('GPAPP')
    .filter("currency", function($sce) {
        return function(number, option1, option2) {
            if (isNaN(number) || number < 1) {
                return number;
            } else {
                option1 = option1 || "Rs";
                option2 = option2 || ""
                if (option2 != "") {
                    return $sce.trustAsHtml('<span class="small">' + option1 + " <strong><em>" + number + "</em></strong> <mark>" + option2 + '</mark>');
                } else {
                    return $sce.trustAsHtml('<span class="small">' + option1 + " <strong><em>" + number + "</em></strong>");
                }
            }
        }
    });