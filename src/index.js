module.exports = reverse = (n) => {
    return (`${n}`[0] == '-') ?
        +(`${n}`.slice(1).split("").reverse().join("")) :
        +(`${n}`.split("").reverse().join(""))
}

