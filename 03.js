class Mahasiswa{
  constructor(nama,nim,jurusan){
this.nama = nama;
    this.nim = nim;
    this.jurusan = jurusan;
  }
  
  belajar(){
    console.log(`${this.nama} sedang belajar.`);
  }
}
let mhs1 = new Mahasiswa('ahmad',1234,'Informatika');
mhs1.belajar();

let mhs2 = new Mahasiswa('ari',4321,'Informatika');
mhs2.belajar();

