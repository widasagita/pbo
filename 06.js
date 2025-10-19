// Kelas abstrak Kendaraan
class Kendaraan {
  constructor(merk) {
    this.merk = merk;
    if (this.constructor === Kendaraan) {
      throw new Error("Kelas abstrak 'Kendaraan' tidak bisa diinstansiasi langsung.");
    }
  }

  maju() {
    throw new Error("Method 'maju()' harus diimplementasikan!");
  }
}

// Subclass Mobil yang mewarisi Kendaraan
class Mobil extends Kendaraan {
  maju() {
    return `${this.merk} melaju dengan kecepatan tinggi!`;
  }
}

// Instansiasi objek Mobil
const avanza = new Mobil("Toyota Avanza");
console.log(avanza.maju());

// Interface sebagai objek blueprint (simulasi interface)
const kendaraanInterface = {
  maju: function () {
    throw new Error("Method 'maju()' harus diimplementasikan!");
  }
};

// Kelas Sepeda tanpa mewarisi Kendaraan, tetapi mematuhi "interface"
class Sepeda {
  constructor(merk) {
    this.merk = merk;
  }

  maju() {
    return `${this.merk} melaju dengan tenaga manusia!`;
  }
}

// Menguji apakah Sepeda mematuhi interface
const polygon = new Sepeda("Polygon");
console.log(polygon.maju());

if (typeof polygon.maju !== "function") {
  throw new Error("Class Sepeda harus mengimplementasikan 'maju()'!");
}

// Kelas abstrak Pembayaran
class Pembayaran {
  constructor(jumlah) {
    this.jumlah = jumlah;
    if (this.constructor === Pembayaran) {
      throw new Error("Kelas abstrak 'Pembayaran' tidak bisa diinstansiasi langsung.");
    }
  }

  prosesPembayaran() {
    throw new Error("Method 'prosesPembayaran()' harus diimplementasikan!");
  }
}

// Subclass KartuKredit
class KartuKredit extends Pembayaran {
  prosesPembayaran() {
    return `Pembayaran ${this.jumlah} melalui Kartu Kredit berhasil!`;
  }
}

// Subclass PayPal
class PayPal extends Pembayaran {
  prosesPembayaran() {
    return `Pembayaran ${this.jumlah} melalui PayPal berhasil!`;
  }
}

// Implementasi pembayaran
const bayar1 = new KartuKredit(500000);
console.log(bayar1.prosesPembayaran());

const bayar2 = new PayPal(250000);
console.log(bayar2.prosesPembayaran());
