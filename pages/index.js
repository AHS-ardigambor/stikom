// Componen memanggil fungsi class componen bawaan react
import {Component} from 'react'
import Layout from '../component/template'

export default class extends Component {
    //didalam class komponen kita tidak bisa menulis function
    // didalam componen harus memanggil render
    // Semua html ada didalam render.
    render(){
        // Didalam render, harus ada return
        // Didalam retur hanya bisa dibungkus oleh satu div atau element html <> </>
        // Nantinya konten ada di pages. karena konten sering berubah - ubah
        return (
           <div>
               <Layout>
               <style jsx>{`
                    .gambar{
                    float: left;
                    margin: 10px;
                    
                    }
                `}</style>
                
                    <div className="row">
                    <div className="col-sm alert-primary">
                    <div className="gambar">
                    <iframe src="https://www.youtube.com/embed/m2Icrr1QZJ8" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" width=" 550" height="300" allowfullscreen/></div> <p align="justify"><b><h3>Sejarah </h3></b>Sejarah berdirinya Sekolah Tinggi Ilmu Komputer PGRI Banyuwangi (STIKOM) di Banyuwangi tidak dapat dilepaskan dari prakarsa Perkumpulan Pembina Lembaga Pendidikan Perguruan Tinggi (PPLP-PT) PGRI Banyuwangi. STIKOM PGRI Banyuwangi telah beroperasi sejak tahun 1993 dengan status terdaftar SK Dikti No. 127/DIKTI/KEP/1993 tanggal 20 April 1993 untuk program studi Manajemen Informatika.</p>
                    
<p align="justify">Pengelolaan STIKOM PGRI Banyuwangi sejak mulai beroperasi pada tahun 1993-1999 menjadi satu dengan IKIP PGRI Banyuwangi (UNIBA) dengan sebutan STIK PGRI Banyuwangi. Mulai tahun 1999 STIK PGRI Banyuwangi dikelola secara mandiri. Kemudian pada tahun 2005 STIK PGRI Banyuwangi mengubah namanya menjadi STIKOM PGRI Banyuwangi. STIKOM PGRI Banyuwangi mendapatkan status terakreditasi dengan S.K. No. 012/BAN-PT/AK-VII/DpI-III/ VIII/2008 tanggal 24 Agustus 2008.</p>

<p align="justify">Pada tahun 2006 STIKOM PGRI Banyuwangi menambah satu program studi baru, yaitu Program Studi Teknik Informatika dengan jenjang pendidikan Strata Satu (S1) yang memiliki ijin operasional dari Dikti dengan no. SK. 774/D/T/2006 tanggal 21 Pebruari 2006.Pada tahun 2006 STIKOM PGRI Banyuwangi menambah satu program studi baru, yaitu Program Studi Teknik Informatika dengan jenjang pendidikan Strata Satu (S1) yang memiliki ijin operasional dari Dikti dengan no. SK. 774/D/T/2006 tanggal 21 Pebruari 2006.</p>
<p align="justify"><b><h3>Sasaran Dan Tujuan</h3></b>
SASARAN - (1). Melengkapi dan mengganti peralatan peralatan yang sudah usang dengan peralatan yang paling mutakhir. (2). Melengkapi perangkat Pembelajaran agar sesuai dengan tuntutan zaman. (3). Mencetak alumnialumni (output) yang cukup representatif dalam memberikan solusi dibidang informatika, dan handal dalam mengantisipasi tugas tugasnya. (4). Menggalakkan penelitian dikalangan mahasiswa maupun jajaran staf dosen agar membuahkan inovasi inovasi baru bidang informatika. Menyesuaikan kurikulum yang digunakan dengan dasar kurikulum dan APTIKOM.</p>

<p align="justify">TUJUAN - Menghasilkan sumber daya manusia yang handal, memiliki kadar intelektual yang tinggi, berbudi luhur dalam mengamalkan bidang ilmu informatika dan komputer. Memberi kontribusi pada birokrat, politisi, businessman, masyarakat pada umumnya dalam membangun dan mengimplementasikan teknologi informatika dan komputer.</p>
                    </div>
                   </div>
               </Layout>
               
           </div> 
        )
    }

}

// Untuk hosting di zeith.co anda harus login dulu dengan github
// dan jika sudah login, bisa melakukan update 
// kemudian ketik now di terminal
// untuk melakukan upload ke zeith. Ketik 'now' login dan mengurut sesuai keinginan
// jika error install : 'npm install -g now'
// Jika igin update : 'now --prod'