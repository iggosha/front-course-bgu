function longestCommonPrefix(wordsList) {
    if (wordsList.length === 0) {
        return "";
    }
    var prefix = wordsList[0];
    for (var i = 1; i < wordsList.length; i++) {
        while (wordsList[i].indexOf(prefix) !== 0) {
            prefix = prefix.slice(0, prefix.length - 1);
            if (prefix === "") {
                return "";
            }
        }
    }
    return prefix;
}

console.log(longestCommonPrefix(["flower", "flow", "flight"]));
console.log(longestCommonPrefix(["dog", "racecar", "car"]));
