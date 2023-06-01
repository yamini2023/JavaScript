var Days;
(function (Days) {
    Days[Days["sun"] = 0] = "sun";
    Days[Days["mon"] = 1] = "mon";
    Days[Days["tues"] = 2] = "tues";
    Days[Days["wednes"] = 3] = "wednes";
    Days[Days["thurs"] = 4] = "thurs";
    Days[Days["fri"] = 5] = "fri";
    Days[Days["satur"] = 6] = "satur";
})(Days || (Days = {}));
var whichday;
whichday = Days.fri;
console.warn(whichday);
