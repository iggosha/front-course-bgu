function longestCommonPrefix(wordsList: string[]): string {
    if (wordsList.length === 0) {
        return "";
    }
    let prefix = wordsList[0];
    for (let i = 1; i < wordsList.length; i++) {
        while (wordsList[i].indexOf(prefix) !== 0) {
            prefix = prefix.slice(0, prefix.length - 1);
            if (prefix === "") {
                return "";
            }
        }
    }

    return prefix;
}

// Примеры использования
console.log(longestCommonPrefix(["flower", "flow", "flight"])); // Выводит "fl"
console.log(longestCommonPrefix(["dog", "racecar", "car"])); // Выводит ""
