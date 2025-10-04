class Mahasiswa {
  constructor(nama, nim, nilai) {
    this.nama = nama; // Atribut publik
    this.nim = nim;   // Atribut publik
    let _nilai = nilai;  // Atribut "private" dengan closure
    
    // Getter untuk mengakses nilai
    this.getNilai = function() {
      return _nilai;
    };

    // Setter untuk mengubah nilai dengan validasi
    this.setNilai = function(nilaiBaru) {
      if (nilaiBaru >= 0 && nilaiBaru <= 100) {
        _nilai = nilaiBaru;
      } else {
        console.log(`Nilai harus antara 0 dan 100`);
      }
    };

    //tambahan1: menampilkan info mahasiswa
    this.tampilkanInfo = function() {
      console.log(`Nama: ${this.nama}, NIM: ${this.nim}, Nilai: ${_nilai}`);
    };

    //tambahan2: menentukan status kelulusan
    this.statusKelulusan = function() {
      if (_nilai >= 75) {
        console.log(`${this.nama} dinyatakan LULUS`);
      } else {
        console.log(`${this.nama} dinyatakan TIDAK LULUS`);
      }
    };
  }
}
const s1 = new Mahasiswa('Wida',123456, 90);
s1.tampilkanInfo();
s1.statusKelulusan();
s1.setNilai(60);
s1.tampilkanInfo();
s1.statusKelulusan();
