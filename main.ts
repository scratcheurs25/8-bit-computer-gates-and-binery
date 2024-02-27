let retenue = false
let resulte = ""
let i1 = 3
let i2 = 8
let b1 = Gates.decimalToBinary(i1)
let b2 = Gates.decimalToBinary(i2)
for (let index = 8; index >= 1; index--) {
    if (Gates.xor(Gates.xor(Gates.getBit(b1, index), Gates.getBit(b2, index)), retenue)) {
        resulte = "1" + resulte
        if (Gates.or(Gates.and(Gates.getBit(b1, index), Gates.getBit(b2, index)), Gates.or(Gates.and(Gates.getBit(b1, index), retenue), Gates.and(Gates.getBit(b2, index), retenue)))) {
            retenue = true
        } else {
            retenue = false
        }
    } else {
        resulte = "0" + resulte
        if (Gates.or(Gates.and(Gates.getBit(b1, index), Gates.getBit(b2, index)), Gates.or(Gates.and(Gates.getBit(b1, index), retenue), Gates.and(Gates.getBit(b2, index), retenue)))) {
            retenue = true
        }
    }
}
basic.showNumber(Gates.binaryToDecimal(resulte))
