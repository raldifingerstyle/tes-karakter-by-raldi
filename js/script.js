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
                  ·Suka berterus terang dan tidak suka basa-basi (to the point)
                  ·pandai menyimpan rahasia dan bisa dipercaya (ini yang bagus)
                  ·Disukai banyak orang karena selalu kelihatan ceria (yang penting nda ketawa-ketawa sendiri)
                  ·Mandiri dan tidak suka meminta bantuan pada orang lain (antara Mandiri dan sombong)
                  ·Pandai mengatur keuangan (irit)
                  ·Agak pendiam dan lebih senang memperhatikan dirinya sendiri (lumayan tertutup)
                  ·Teliti dan tidak sembarangan melakukan pekerjaan.`
             }else if(blan == 'Februari'){
                return this.watak = `
                ·Mempunyai hati yang tulus 
                ·Perasaannya peka dan mudah tersinggung (jadi jangan asal bicara sama orang yang lahir bulan februari)
                ·Senang dipuji dan selalu menuruti apa yang diinginkannya
                ·Suka humor dan hormat pada siapa saja 
                ·Keras hati dan mempunyai pendirian tetap 
                ·Agak pemalas dan suka mengingkari janji (ini mines nya)`
             }else if(blan == 'Maret'){
                return this.watak =`
                ·Baik hati dan suka menolong sesama (pertahankan)
                ·Suka kehidupan yang serba wah (yang penting jangan matre)
                ·Seleranya tinggi 
                ·Tidak tegaan dan selalu memberi pada orang yang kesusahan (Kalo yang ini pertahankan)
                ·Agak pemalu, namun jujur dan tidak pernah bohong (good)
                ·Mudah terpengaruh dan tidak kuat mengghadapi godaan (pasti banyak dosanya wkwkwkwk)
                ·Suka melalaikan kesehatan dirinya sendiri.`
             }else if(blan == 'April'){
                return this.watak = `
                ·Tidak mau mengalah dan selalu ingin menang sendiri (kadang kadang)                
                ·Senang dipuji (caper caper sedikit)
                ·Agak boros walau pandai mencari uang (visi misi foya foya wkwkwkwk)
                ·Mempunyai otak yang cerdas namun tidak suka diperintah (kecuali ba perintah xixixixi)
                ·Tak pernah memilih dalam berteman (yang penting asik, sikat....)`
             }else if(blan == 'Mei'){
                return this.watak = `
                ·         Pandai menguasai perasaan (tidak mudah tergodah)
                ·         Pandai mengambil hati orang lain (rajanya caper wkwkwk)
                ·         Punya selera tinggi dan senang kehidupan yang serbah wah 
                ·         Senang menunda pekerjaan (apalagi kalo lagi nda mood)
                ·         Agak boros walau rejekinya bagus.
                ·         Tidak suka basa-basi dan tidak senang dipuji.`
            }else if(blan == 'Juni'){
                return this.watak = `
				·         Romantis dan suka menolong (pertahankan)
                ·         Tidak mempunyai pendirian tetap (mudah goya)
                ·         Suka berpikir yang muluk-muluk (seperti cita-cita, intinya yang bagus-bagus)
                ·         Mudah tersinggung bila perasaanya tersentuh (terharuh, terbawah perasaan)
                ·         Agak pemalas dan baru mau bekerja bila di iming-iming hasil besar 
                ·         Selalu ceria walau hatinya sedang kesal (rajanya sandiwara wkwkwkwk).`
            }else if(blan == 'Juli'){
                return this.watak =`
                ·         Senang berkhayal (halusinasi)

                ·         Kalau sudah marah, kata-katanya tajam (menusuk skali)

                ·         Tidak mempunyai pendirian tetap 

                ·         Senang dipuji 

                ·         Suka menolong pada sesama

                ·         Pandai bicara dan berotak cerdas (cocok ikut demo wkwkwk)

                ·         Agak pemalas
                `
            }else if(blan == 'Agustus'){
                return this.watak =`
                ·         Mempunyai perasaan yang peka/halus (diam-diam menghanyutkan)

                ·         Cepat tersinggung (padahal bukan dia yang di singgung)

                ·         Suka menghayal dan berpikiran yang muluk-muluk (seperti menghayal cita-cita nya)

                ·         Tidak mudah terpengaruh 

                ·         Agak pemalas

                ·         Kalau bekerja lebih menuruti kehendak hatinya sendiri (alias kerja pake hati bukan otak.
                `
            }else if(blan == 'September'){
                return this.watak =`
                ·         Mudah tersinggung dan cepat naik darah (yang penting jangan sampe stroke)

                ·         Baik hati dan jujur (ini bagusnya)

                ·         Bisa menyimpan rahasia 

                ·         Suka berfoya-foya (visi misi foya foya wkwkwk)

                ·         Pandai menyimpan uang namun tidak pelit 

                ·         Suka menolong sesama dan pandai mendidik anak
                `
            }else if(blan == 'Oktober'){
                return this.watak =`
                ·         Berjiwa besar dan mau mengalah (dalam artian tidak suka berdebat)

                ·         Pandai bicara 

                ·         Cerdas dan baik hati

                ·         Memiliki tekad yang kuat

                ·         Tidak sabaran dan agak boros (liat, suka, beli)

                ·         Pikirannya tidak tetap dan selalu berubah-ubah 
                `
            }else if(blan == 'November'){
                return this.watak =`
                ·         Tabah dan kuat dalam menghadapi segala cobaan (rajanya sabar wkwkwk)

                ·         Pandai mengerjakan setiap pekerjaan (multi talent)
                
                ·         Pandai mengambil hati orang lain 
                
                ·         Agak pemalas dan suka menunda pekerjaaan
                
                ·         Banyak berpikir (tapi jarang stres wkwkwk)
                
                ·         Agak pendendam dan tidak mudah memberi maaf pada orang yang bersalah (ini mines nya)
                
                ·         Keras hati
                `
            }else if(blan == 'Desember'){
                return this.watak =`
                ·         Mudah menaruh rasa percaya pada orangg lain (siap di kecewakan wkwkwk)

                ·         Kalau mengerjakan sesuatu suka tergessa-gesa (mau cepat selesai)

                ·         Tidak sabaran 

                ·         Tidak mau mengalah dan selalu ingin menang sendiri (egois)

                ·         Mudah terpengaruh 

                ·         Jujur dan baik hati (ini bagus nya)

                ·         Pemborosan dan suka memaksakan kehendak
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
                    return this.waktus = 'Slamat Pagi...awali harimu dengan senyuman'
                    break;
                case 10: case 11: case 12: case 13: case 14:
                    return this.waktus = 'Slamat Siang'
                    break;
                case 15: case 16: case 17: case 18:
                    return this.waktus = 'Slamat Sore'
                    break;
                case 19: case 20: case 21: case 22: case 23: case 24:
                    return this.waktus = 'Slamat Malam...jaga kesehatan , jangan begadang !'
                    break;
                default:
                    return this.waktus = 'ini sudah jam berapa ? jaga kesehatan lah ! jangan begadang'
                    break;
            }
        }

    }
})