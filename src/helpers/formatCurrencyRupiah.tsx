import React, { FC } from "react";

const formatCurrencyRupiah: any = (angka: any) => {
  var reverse = angka.toString().split("").reverse().join("");
  var ribuan = reverse.match(/\d{1,3}/g);
  var hasil = ribuan.join(".").split("").reverse().join("");
  if (angka >= 1000000000000) {
    return "Rp" + (angka / 1000000000000).toFixed(2) + "T";
  } else if (angka >= 1000000000) {
    return "Rp" + (angka / 1000000000).toFixed(2) + "M";
  } else {
    return "Rp" + hasil + ",-";
  }
};

export default formatCurrencyRupiah;
