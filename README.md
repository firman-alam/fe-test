# Front-end Dev Test

## Technology

- Redux Toolkit (state management)
- RTK Query (fetching API)
- MUI Icons (icons)

## Requirement

1. Menggunakan ReactJS. Typescript tidak keharusan, tapi akan jadi nilai plus
2. Harus responsive dengan segala jenis device (mobile, tablet, laptop)
3. Support pagination. User hanya ditunjukkan halaman yang dipilih. Halaman lain tidak akan diload jika tidak dibutuhkan
4. Fitur bookmark local storage disediakan untuk user menge-pin buku favorit mereka
5. Ketika user melihat list buku sebuah kategori, fitur pencarian dibutuhkan untuk membantu memudahkan menemukan buku berdasarkan judul dan author. Tidak disediakan API Search, user hanya diijinkan melakukan pencarian dari list yang sudah ditampilkan sebelumnya.
6. Source code harus tersedia di github

## Link API Categories

<!--
path    : /
method  : GET
desc    : mengembalikan list kategori yang tersedia
-->

https://asia-southeast2-sejutacita-app.cloudfunctions.net/fee-assessment-categories

## Link API Books

<!--
path    : /
method  : GET
desc    : Terdapat 3 query params = categoryId, page, and size
-->

https://asia-southeast2-sejutacita-app.cloudfunctions.net/fee-assessment-books?categoryId=1&page=0&size=5

## Feedback untuk improve API - Backend

1. Cors issue, saya harus menggunakan plugin moeful cors untuk bisa mengakses API karena terhalang cors policy. Untuk sisi backend bisa diperbaiki tentang sistem cors-nya.
2. Untuk API Categories, data yang dikirim ke sisi FE berupa text/plain bukan berupa JSON. Kedepannya data yang dikirim dalam bentuk JSON semua.
3. Untuk query page bisa diperbaiki juga, karena walaupun tidak diberikan maksimal page yang ada.
4. Untuk id data Category buku, tidak terurut angkanya. Akan susah jika kedepannya ada penambahan Category buku.
5. Salah satu Category buku datanya kosong, difilter sebelum dikirim ke FE.

## Notes

Terima kasih atas diberikannya kesempatan untuk test technical FE di perusahaan bapak/ibu. Mohon maaf saya kehabisan waktu sehingga ada beberapa fitur yang belum selesai. Saya akan belajar lagi agar bisa menyelesaikan masalah ini tepat waktu kedepannya.
