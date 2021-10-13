new Vue({
    el: '#apps',
    data: {
        tanggal : [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31],
        bulan: ['Januari','Februari','Maret','April','Mei','Juni','Juli','Agustus','September','Oktober','November','Desember'],
        nama: '',
        waktus: '',
        tanggalValue: '',
        bulanValue: '',
        sifat: '',
        watak: '',
        bulans: 0
    },
    methods: {
        sub: function(){
            tggl = this.tanggalValue
            blan = this.bulanValue
            this.bulans = 1

            
            if(blan == 'Januari'){
                return this.watak = `
                ·Tenang dan berwibawa
                  ·Suka berterus terang dan tidak suka basa-basi
                  ·andai menyimpan rahasia dan bisa dipercaya
                  ·Disukai banyak orang karena selalu kelihatan ceria
                  · Mandiri dan tidak suka meminta bantuan pada orang lain
                  ·Pandai mengatur keuangan
                  ·Agak pendiam dan lebih senang memperhatikan dirinya sendiri
                  ·Teliti dan tidak sembarangan melakukan pekerjaan.`
             }else if(blan == 'Februari'){
                return this.watak = `
                ·Mempunyai hati yang tulus
                ·Perasaannya peka dan mudah tersinggunng
                ·Senang dipuji dan selalu menuruti apaa yang diinginkannya
                ·Suka humor dan hormat pada siapa sajaa
                ·Keras hati dan mempunyai pendirian teetap
                ·Agak pemalas dan suka mengingkari janji`
             }else if(blan == 'Maret'){
                return this.watak =`
                ·Baik hati dan suka menolong sesama.
                ·Suka kehidupan yang serba wah.
                ·Seleranya tinggi.
                ·Tidak tegaan dan selalu memberi pada orang yang kesusahan.
                ·Agak pemalu, namun jujur dan tidak peernah bohong.
                ·Mudah terpengaruh dan tidak kuat mengghadapi godaan.
                ·Suka melalaikan kesehatan dirinya senndiri.`
             }else if(blan == 'April'){
                return this.watak = `
                ·Tidak mau mengalah dan selalu ingin menang sendiri
                ·Pembosan
                ·Senang dipuji
                ·Agak boros walau pandai mencari uang
                ·Mempunyai otak yang cerdas namun tidak suka diperintah
                ·Tak pernah memilih dalam berteman`
             }else if(blan == 'Mei'){
                return this.watak = `
                ·         Pandai menguasai perasaan
                ·         Pandai mengambil hati orang lain
                ·         Punya selera tinggi dan senang kehiduupan yang serbah wah.
                ·         Senang menunda pekerjaan.
                ·         Agak boros walau rejekinya bagus.
                ·         Tidak suka basa-basi dan tidak senangg dipuji.`
            }else if(blan == 'Juni'){
                return this.watak = `·         Romantis dan suka menolong
                ·         Tidak mempunyai pendirian tetap
                ·         Suka berpikir yang muluk-muluk
                ·         Mudah tersinggung bila perasaanya terrsentuh
                ·         Agak pemalas dan baru mau bekerja billa di iming-iming hasil besar
                ·         Selalu ceria walau hatinya sedang kessal.`
            }else if(blan == 'Juli'){
                return this.watak =`
                ·         Senang berkhayal

                ·         Kalau sudah marah, kata-katanya tajam

                ·         Tidak mempunyai pendirian tetap

                ·         Senang dipuji

                ·         Suka menolong pada sesama

                ·         Pandai bicara dan berotak cerdas

                ·         Agak pemalas
                `
            }else if(blan == 'Agustus'){
                return this.watak =`
                ·         Mempunyai perasaan yang peka/halus

                ·         Cepat tersinggung

                ·         Suka menghayal dan berpikiran yang muluk-muluk

                ·         Tidak mudah terpengaruh

                ·         Agak pemalas

                ·         Kalau bekerja lebih menuruti kehendak hatinya sendiri.
                `
            }else if(blan == 'September'){
                return this.watak =`
                ·         Mudah tersinggung dan cepat naik darah

                ·         Baik hati dan jujur

                ·         Bisa menyimpan rahasia

                ·         Suka berfoya-foya

                ·         Pandai menyimpan uang namun tidak pelit

                ·         Suka menolong sesama dan pandai mendidik anak
                `
            }else if(blan == 'Oktober'){
                return this.watak =`
                ·         Berjiwa besar dan mau mengalah

                ·         Pandai bicara

                ·         Cerdas dan baik hati

                ·         Memiliki tekad yang kuat

                ·         Tidak sabaran dan agak boros

                ·         Pikirannya tidak tetap dan selalu berrubah-ubah
                `
            }else if(blan == 'November'){
                return this.watak =`
                ·         Tabah dan kuat dalam menghadapi segala cobaan

                ·         Pandai mengerjakan setiap pekerjaan
                
                ·         Pandai mengambil hati orang lain
                
                ·         Agak pemalas dan suka menunda pekerjaaan
                
                ·         Banyak berpikir
                
                ·         Agak pendendam dan tidak mudah memberi  pada orang yang bersalah
                
                ·         Keras hati
                `
            }else if(blan == 'Desember'){
                return this.watak =`
                ·         Mudah menaruh rasa percaya pada orangg lain

                ·         Kalau mengerjakan sesuatu suka tergessa-gesa

                ·         Tidak sabaran

                ·         Tidak mau mengalah dan selalu ingin menang sendiri

                ·         Mudah terpengaruh

                ·         Jujur dan baik hati

                ·         – Pemborosan dan suka memaksakan kehendak
                `
            }

            switch (tggl) {
                case 1: case 9: case 24:
                return this.sifat = `Pada umumnya manusia ini bersifat pendiam & konservatif. Namun dengan orang-orang tertentu dia cepat mesra. 
                Tapi manusia yang lahir tanggal `+ tggl +` mudah tersinggung. Karena sifatnya itu menyebabkan banyak orang yang tidak menyukainya. Namun begitu dia tetap dikagumi karena bersikap serius terutama yang berhubungan dengan orang ramai. Dalam hal percintaan, dia sanggup berbuat apa saja semata-mata untuk memenuhi segala keinginan manusianya. Tapi hati-hati kadangkala dia lebih mementingkan persahabatan daripada percintaan dan lebih rela memutuskan cintanya demi sebuah persahabatan yang telah terjalin lama.` 
                    break;
                case 2: case 11: case 30:
                return this.sifat = `Orangnya perasa dan mudah tersinggung. Sifatnya yang suka menyendiri membuatkan dia lebih suka tinggal di rumah. Banyak orang suka bergaul denganya karena perwatakannya yang lembut &ramah.Dia paling benci jika cintanya ditolak atau dikhianati oleh orang yang benar-benar dicintainya. Namun begitu dia selalu bersikap sabar dan tidak terburu-buru dalam bertindak. Sayangnya untuk urusan masa depan dia bersikap pesimis sering mengalah sebelum mencuba. Oleh itu mesti ada yang mendorongnya agar tidak terus terjebak dengan sikap pesimisnya.` 
                    break;
                case 3: case 18: case 29:
                return this.sifat = `Sabar serta pandai menguasai diri adalah ciri yang khas bagi manusia yang lahir pada tanggal ` + tggl + ` . Tapi jangan cuba mempermain-mainkannya, dia akan mengamuk dengan hebat. Dia tergolong manusia yang bijaksana dan bertanggungjawab. Sifat jujur & ramah adalah modal utamanya dalam bergaul. Tapi dalam soal cinta dia merupakan manusia yang susah untuk dimengertikan.` 
                    break;
                case 4: case 13:
                return this.sifat = `Manusia yang lahir pada tanggal ` + tggl + ` adalah seorang yang pandai, suka bergaul dan mudah berubah pendapat. Dia seringkali tidak yakin dengan diri sendiri. Dalam soal cinta, dia tergolong manusia yang mata keranjang dan suka bertukar-tukar partner. Sifat ini membuatkan orang tidak suka apa lagi untuk bersimpati dengannya. Dia sering bersifat dingin kepada orang lain karena menganggap orang lain merupakan faktor penyebab timbulnya masalah. Tapi dia memiliki sifat kelakar, mudah ketawa dan kadangkala bersikap keanak-anakkan.` 
                    break;
                case 5: case 17:
                return this.sifat = `Yang lahir pada tanggal ` + tggl + ` adalah seorang yang optimis, bercita-cita tinggi dan punya kecederungan untuk berprestasi. Namun begitu dia adalah seorang yang berwatak keras dan apa yang diinginkan selalunya dipenuhi.Memandangkan sesuatu selalunya dari segi yangmenguntungkan.Tapi sayangnya dia suka menganggap remeh pada orang lain. Dalam soal cinta, berhati-hatilah karena dia suka bertukar-tukar manusia.` 
                    break;
                case 6: case 14: case 27:
                return this.sifat = `Dia adalah seorang manusia yang tidak mau kalah dan pantang menyerah. Kejujuran dan keadilan merupakan sifat yang membuatkan dia disegani. Dalam soal cinta dia ingin memberi yang terbaik kepada orang yang dicintainya. Namun begitu harga dirinya terlalu tinggi sehingga dia tidak pernah mengerti mengapa seseorang itu menolak kebaikannya.` 
                    break;
                case 7: case 28: case 31:
                return this.sifat = `Dia adalah seorang yang bersifat terbuka berterus terang & jujur. Namun dia mudah sekali terpengaruh dan ingin mencapai sesuatu itu dengan cara mudah. Cinta baginya sering diertikan sebagai pengisi masa lapang.Semasa bercinta dia sangat berhati-hati dan suka sekali merayu dan kalau manusianya curang dia dengan mudah meninggalkannya.` 
                    break;
                case 8: case 23:
                return this.sifat = `Dia bersifat peramah dan mudah perasa. Kepada teman-teman dia bersifat lembut & bijaksana. Namun begitu dia tersisih dari teman-teman karena rasa rendah diri yang terlalu menebal. Dia memerlukan suasana yang seimbang baik sewaktu berfikir mahupun dalam kehidupan seharian.Kelemahan yang paling menonjol ialah gugup dan selalu dihantui perasaan khuatir tetapi dia adalah seorang yang penjimat. Dalam urusan cinta, dia seorang yang tabah dan rela berkorban.` 
                    break;
                case 10: case 16: case 21:
                return this.sifat = `Suka bekerja keras, memiliki nafsu yang tinggi dalam usaha mencapai cita-citanya. Dalam pergaulan sehari-hari dia merupakan orang yang mudah tersinggung. Namun begitu dia seorang yang jujur & tabah dalam menghadapi persoalan. Soal cinta dia sangat setia dan sebab itulah dia mudah disenangi. Tapi dia seorang yang terlalu cemburu. Kalau baik dia sangat baik dan kalau jahat dia merupakan orang yang paling jahat.` 
                    break;
                case 12: case 19:
                return this.sifat = `Orang yang lahir pada tanggal ` + tggl + ` memiliki sifat suka dipuji. Dia berharap setiap orang akan menganggapnya sebagai juara. Pada dasarnya dia suka berdandan dan berpakaian rapi. karena itu dia sering membelanjakan wangnya untuk menunjukan penampilannya. Dalam Kehidupan sehari-hari dia adalah manusia yang disegani karena bakat kepimpinannya. Sifatnya yang bijaksana membuatkan dia disegani dalam pergaulan. Dalam urusan cinta, dia adalah manusia yang sangat susah untuk dipercayai.` 
                    break;
                case 15: case 20: case 26:
                return this.sifat = `Jangan mengharapkan sifat romantis dari manusia yang lahir pada tanggal ` + tggl + `. Dia tergolong dalam orang yang kurang serius, bersikap bodoh dalam menghadapi sesuatu. Namun begitu dia selalu bersikap penuh pengertian bila menghadapi sesuatu masalah. Dia sangat benci pada perkara-perkara yang berbau keributan terutama yang menimbulkan huru-hara. Dalam hal percintaan dia menuntut untuk lebih diberi perhatian tapi dia jarang mengambil berat pada manusianya. Namun begitu sikapnya disenangi oleh kawan-kawan` 
                    break;
                case 22: case 25:
                return this.sifat = `Wataknya paling susah untuk dimengertikan.Kadangkala dia disukai karena kebaikannya dan kadangkala dia dibenci karena perbuatannya. Namun buat teman-teman dia merupakan orang penuh pengertian.
                Dalam pelbagai situasi dia lebih suka merendahkan diri jarang sekali mahu menonjolkan kelebihannya pada orang lain.Manusia jenis ini terkenal sebagai perayu dan sebab itulah dia diberi julukan seniman asmara.` 
                    break;
                default:
                    break;
            }
        },  
          reload: function(){
            location.reload()
        }

    },

    computed: {
        waktu : function(){
           var date = new Date()
            switch (date.getHours()) {
                case 5: case 6: case 7: case 8: case 9: case 10:
                    return this.waktus = 'Slamat Pagi'
                    break;
                case 10: case 11: case 12: case 13: case 14:
                    return this.waktus = 'Slamat Siang'
                    break;
                case 15: case 16: case 17: case 18:
                    return this.waktus = 'Slamat Sore'
                    break;
                case 19: case 20: case 21: case 22: case 23: case 24:
                    return this.waktus = 'Slamat Malam'
                    break;
                default:
                    return this.waktus = 'ndak tidur ko ?'
                    break;
            }
        }

    }
})