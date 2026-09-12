// Service Worker: Trắc Nghiệm Vật Lí THPT (Offline-First PWA)
const CACHE_NAME = 'vatli-thpt-cache-v4';

// 1. Core Shell URLs to cache immediately on install
const CORE_ASSETS = [
  "./",
  "./index.html",
  "./manifest.webmanifest",
  "./icon-192.png",
  "./icon-512.png",
  "./apple-touch-icon.png",
  "./icon.svg",
  "./lop10/",
  "./lop10/index.html",
  "./lop11/",
  "./lop11/index.html",
  "./lop12/",
  "./lop12/index.html"
];

// 2. All 85 lesson standalone pages to cache in the background
const ALL_LESSON_ASSETS = [
  "./lop10/Bai_01_Khai_quat_ve_mon_Vat_li.html",
  "./lop10/Bai_02_Van_de_an_toan_trong_phong_thuc_hanh_Vat_li.html",
  "./lop10/Bai_03_Thuc_hanh_tinh_sai_so_trong_phep_do_Ghi_ket_qua_do.html",
  "./lop10/Bai_04_Do_dich_chuyen_va_quang_duong_di_duoc.html",
  "./lop10/Bai_05_Toc_do_va_van_toc.html",
  "./lop10/Bai_06_Thuc_hanh_Do_toc_do_cua_vat_chuyen_dong.html",
  "./lop10/Bai_07_Do_thi_do_dich_chuyen_thoi_gian.html",
  "./lop10/Bai_08_Chuyen_dong_bien_doi_Gia_toc.html",
  "./lop10/Bai_09_Chuyen_dong_thang_bien_doi_deu.html",
  "./lop10/Bai_10_Su_roi_tu_do.html",
  "./lop10/Bai_11_Thuc_hanh_Do_gia_toc_roi_tu_do.html",
  "./lop10/Bai_12_Chuyen_dong_nem.html",
  "./lop10/Bai_13_Tong_hop_va_phan_tich_luc_Can_bang_luc.html",
  "./lop10/Bai_14_Dinh_luat_I_Newton.html",
  "./lop10/Bai_15_Dinh_luat_II_Newton.html",
  "./lop10/Bai_16_Dinh_luat_III_Newton.html",
  "./lop10/Bai_17_Trong_luc_va_luc_cang.html",
  "./lop10/Bai_18_Luc_ma_sat.html",
  "./lop10/Bai_19_Luc_can_va_luc_nang.html",
  "./lop10/Bai_20_Mot_so_vi_du_ve_cach_giai_bai_toan_thuoc_phan_dong_luc_hoc.html",
  "./lop10/Bai_21_Moment_luc_Can_bang_cua_vat_ran.html",
  "./lop10/Bai_22_Thuc_hanh_Tong_hop_hai_luc_song_song_Khao_sat_can_bang.html",
  "./lop10/Bai_23_Nang_luong_Cong_co_hoc.html",
  "./lop10/Bai_24_Cong_suat.html",
  "./lop10/Bai_25_Dong_nang_the_nang.html",
  "./lop10/Bai_26_Co_nang_va_dinh_luat_bao_toan_co_nang.html",
  "./lop10/Bai_27_Hieu_suat.html",
  "./lop10/Bai_28_Dong_luong.html",
  "./lop10/Bai_29_Dinh_luat_bao_toan_dong_luong.html",
  "./lop10/Bai_30_Thuc_hanh_Xac_dinh_dong_luong_trong_va_cham.html",
  "./lop10/Bai_31_Dong_hoc_cua_chuyen_dong_tron_deu.html",
  "./lop10/Bai_32_Luc_huong_tam_va_gia_toc_huong_tam.html",
  "./lop10/Bai_33_Bien_dang_cua_vat_ran.html",
  "./lop10/Bai_34_Khoi_luong_rieng_Ap_suat_chat_long.html",
  "./lop10/He_Thong_Trac_Nghiem_Vat_Li_10.html",
  "./lop10/He_Thong_Trac_Nghiem_Vat_Li_10_ThayTung.html",
  "./lop10/index.html",
  "./lop11/Bai_01_Dao_dong_dieu_hoa.html",
  "./lop11/Bai_02_Mo_ta_dao_dong_dieu_hoa.html",
  "./lop11/Bai_03_Van_toc_gia_toc_trong_dao_dong_dieu_hoa.html",
  "./lop11/Bai_04_Bai_tap_ve_dao_dong_dieu_hoa.html",
  "./lop11/Bai_05_Dong_nang_The_nang_Su_chuyen_hoa_nang_luong.html",
  "./lop11/Bai_06_Dao_dong_tat_dan_cuong_buc_cong_huong.html",
  "./lop11/Bai_07_Bai_tap_chuyen_hoa_nang_luong.html",
  "./lop11/Bai_08_Mo_ta_song.html",
  "./lop11/Bai_09_Song_ngang_Song_doc_Truyen_nang_luong.html",
  "./lop11/Bai_10_Thuc_hanh_Do_tan_so_song_am.html",
  "./lop11/Bai_11_Song_dien_tu.html",
  "./lop11/Bai_12_Giao_thoa_song.html",
  "./lop11/Bai_13_Song_dung.html",
  "./lop11/Bai_14_Bai_tap_ve_song.html",
  "./lop11/Bai_15_Thuc_hanh_Do_toc_do_truyen_am.html",
  "./lop11/Bai_16_Luc_tuong_tac_giua_hai_dien_tich.html",
  "./lop11/Bai_17_Khai_niem_dien_truong.html",
  "./lop11/Bai_18_Dien_truong_deu.html",
  "./lop11/Bai_19_The_nang_dien.html",
  "./lop11/Bai_20_Dien_the.html",
  "./lop11/Bai_21_Tu_dien.html",
  "./lop11/Bai_22_Cuong_do_dong_dien.html",
  "./lop11/Bai_23_Dien_tro_Dinh_luat_Ohm.html",
  "./lop11/Bai_24_Nguon_dien.html",
  "./lop11/Bai_25_Nang_luong_dien_va_cong_suat_dien.html",
  "./lop11/Bai_26_Thuc_hanh_Do_suat_dien_dong_va_dien_tro_trong.html",
  "./lop11/He_Thong_Trac_Nghiem_Vat_Li_11.html",
  "./lop11/He_Thong_Trac_Nghiem_Vat_Li_11_ThayTung.html",
  "./lop11/index.html",
  "./lop12/Bai_01_Cau_Truc_Chat_Chuyen_The.html",
  "./lop12/Bai_02_Noi_Nang_Dinh_Luat_I.html",
  "./lop12/Bai_03_Nhiet_Do_Thang_Nhiet_Do.html",
  "./lop12/Bai_04_Nhiet_Dung_Rieng.html",
  "./lop12/Bai_05_Nhiet_Nong_Chay_Rieng.html",
  "./lop12/Bai_06_Nhiet_Hoa_Hoi_Rieng.html",
  "./lop12/Bai_07_Bai_Tap_Vat_Li_Nhiet.html",
  "./lop12/Bai_08_Mo_Hinh_Dong_Hoc_Chat_Khi.html",
  "./lop12/Bai_09_Dinh_Luat_Boyle.html",
  "./lop12/Bai_10_Dinh_Luat_Charles.html",
  "./lop12/Bai_11_Phuong_Trinh_Trang_Thai_Khi_Li_Tuong.html",
  "./lop12/Bai_12_Ap_Suat_Khi_Dong_Nang_Phan_Tu.html",
  "./lop12/Bai_13_Noi_Nang_Khi_Li_Tuong.html",
  "./lop12/Bai_14_Tu_Truong.html",
  "./lop12/Bai_15_Luc_Tu_Cam_Ung_Tu.html",
  "./lop12/Bai_16_Tu_Thong_Cam_Ung_Dien_Tu.html",
  "./lop12/Bai_17_Dinh_Luat_Faraday_Lenz.html",
  "./lop12/Bai_18_Tu_Cam.html",
  "./lop12/Bai_19_Dong_Dien_Xoay_Chieu.html",
  "./lop12/Bai_20_Thuc_Hanh_Dong_Dien_Xoay_Chieu.html",
  "./lop12/Bai_21_Cau_Truc_Hat_Nhan.html",
  "./lop12/Bai_22_Nang_Luong_Lien_Ket.html",
  "./lop12/Bai_23_Phong_Xa.html",
  "./lop12/Bai_24_Phan_Ung_Hat_Nhan.html",
  "./lop12/Bai_25_Ung_Dung_Vat_Li_Hat_Nhan.html",
  "./lop12/He_Thong_Trac_Nghiem_Vat_Li_12.html",
  "./lop12/He_Thong_Trac_Nghiem_Vat_Li_12_ThayTung.html",
  "./lop12/index.html"
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(async cache => {
      console.log('[SW] Pre-caching core shell assets...');
      await cache.addAll(CORE_ASSETS).catch(err => console.warn('[SW] Core asset cache notice:', err));
      console.log('[SW] Pre-caching all lesson pages in background...');
      // Cache standalone lessons without blocking installation
      for (const url of ALL_LESSON_ASSETS) {
        cache.add(url).catch(() => {});
      }
    }).then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys => {
      return Promise.all(
        keys.filter(k => k !== CACHE_NAME).map(k => {
          console.log('[SW] Removing legacy cache:', k);
          return caches.delete(k);
        })
      );
    }).then(() => self.clients.claim())
  );
});

// Network-First strategy for HTML navigation requests, Cache-First for static assets
self.addEventListener('fetch', event => {
  if (event.request.method !== 'GET') return;

  // 1. Navigation requests (HTML pages): Try network FIRST so updates show immediately
  if (event.request.mode === 'navigate' || event.request.destination === 'document') {
    event.respondWith(
      fetch(event.request).then(networkResponse => {
        if (networkResponse && networkResponse.status === 200) {
          const resClone = networkResponse.clone();
          caches.open(CACHE_NAME).then(cache => {
            cache.put(event.request, resClone);
          });
        }
        return networkResponse;
      }).catch(() => {
        // If network completely offline, serve from cache!
        return caches.match(event.request).then(cached => {
          return cached || caches.match('./index.html');
        });
      })
    );
    return;
  }

  // 2. Static assets (images, icons): Stale-while-revalidate
  event.respondWith(
    caches.match(event.request, { ignoreSearch: true }).then(cachedResponse => {
      const networkFetch = fetch(event.request).then(networkResponse => {
        if (networkResponse && networkResponse.status === 200) {
          const resClone = networkResponse.clone();
          caches.open(CACHE_NAME).then(cache => {
            cache.put(event.request, resClone);
          });
        }
        return networkResponse;
      }).catch(() => null);

      return cachedResponse || networkFetch;
    })
  );
});
