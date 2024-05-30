function rot13(str) {
    let s = '';

    for (let i = 0; i < str.length; i++) {
        let a = str.charCodeAt(i);

        if (a >= 65 && a <= 90) {
            let b = a + 13;

            if (b > 90) {
                b -= 26;
            }

            s += String.fromCharCode(b);
        } else {
            s += str[i];
        }
    }

    return s;
}