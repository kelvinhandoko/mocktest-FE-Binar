# Configuration

1. pertama, silahkan clone source code dengan command `git clone https://github.com/kelvinhandoko/mocktest-FE-Binar.git`
2. untuk melihat file design, silahkan change directory ke FE-design dengan command `cd FE-design`
3. untuk menjalankan file react, silahkan change directory ke client dengan command `cd client`
4. setelah itu, silahkan install semua package dengan command `npm i`.
5. setelah semua package terinstall, app sudah bisa dijalankan dengan command `npm run start`.
6. app akan otomatis terlaunch di browser default kita.

# About the WEB

## login

### http://localhost:3000/

page awal di web ini adalah page Login.  
Untuk form login bisa diisi dengan data:  
 email:test@gmail.com  
 password: abc123

jika form yang disi benar maka akan diredirect ke page home.

## register

### http://localhost:3000/register

untuk form Register bisa diisi dengan data:  
nama: test  
email:test123@gmail.com  
 password: abc123

jika form yang disi benar maka akan diredirect ke page login.

## home

### http://localhost:3000/home

![homePage screen Shot](./public/Screenshot%20from%202022-07-05%2023-40-51.png)

untuk membuat produk baru, silahkan untuk mengklik tombol **create new**.
![createNew screen Shot](./client/public/Screenshot%20from%202022-07-05%2023-46-36.png)
<br><br>
jika produk success ditambahkan, akan muncul alert seperti ini.
![createNew success Alert screen Shot](./client/public/Screenshot%20from%202022-07-05%2023-48-56.png)
<br><br>

setiap product card memiliki icons untuk **delete** dan **edit**.
<br><br>
untuk button **edit** akan muncul popup seperti berikut.
![edit popup screen Shot](./client/public/Screenshot%20from%202022-07-05%2023-52-41.png)
jika product berhasil diedit akan muncul alert **success to edit**
<br><br>
untuk button **delete** akan muncul popup seperti berikut.
![delete popup screen Shot](./client/public/Screenshot%20from%202022-07-05%2023-54-39.png)
<br><br>
silahkan klik button **delete** untuk menghapus produk.  
<br><br>
jika ingin **logout**, silahkan klik button **logout** dan akan diarahkan kembali ke page **login**.

# https://testbinar.docs.apiary.io/ API

menurut saya, kekurangan pada API tersebut yaitu kurangnya response untuk error handling.
