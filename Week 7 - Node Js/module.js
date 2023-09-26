// membuat module luas persegi
exports.luasPersegi = (sisi) => {
    return sisi * sisi;
}

// membuat module keliling persegi
exports.kelilingPersegi = (sisi) => {
    return 4 * sisi;
}

// membuat module luas persegi panjang
exports.luasPersegiPanjang = (panjang, lebar) => {
    return panjang * lebar;
}

// membuat module keliling persegi panjang
exports.kelilingPersegiPanjang = (panjang, lebar) => {
    return 2 * (panjang + lebar);
}
