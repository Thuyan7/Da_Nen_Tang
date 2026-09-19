# Lab 2: MiCard (React Native)

## Mô tả ứng dụng
Ứng dụng danh thiếp cá nhân (business card) gồm: ảnh đại diện (avatar chữ
cái đầu), tên, chức danh, và 3 dòng thông tin liên hệ (điện thoại, email,
Twitter). Chạm vào từng dòng liên hệ sẽ mở app tương ứng trên điện thoại:
- Chạm số điện thoại → mở màn hình gọi điện.
- Chạm email → mở app soạn mail.
- Chạm Twitter → mở trình duyệt tới trang Twitter.

**Kỹ thuật sử dụng:**
- Bố cục bằng `View` lồng nhau với `flexDirection: 'row'`/`'column'`
  (tương đương Row/Column của Flutter).
- `Linking.openURL()` để mở ứng dụng khác bằng URL scheme (`tel:`,
  `mailto:`, `https:`).
- Style card bo góc, đổ bóng (`shadow...` cho iOS, `elevation` cho
  Android).

## Trước khi chạy — đổi thông tin cá nhân
Mở `App.js`, sửa object `PROFILE` ở đầu file thành thông tin thật của
bạn (tên, chức danh, số điện thoại, email, twitter).

## Cách chạy thử
```bash
npm install
npx expo start
```
Quét mã QR bằng app Expo Go trên điện thoại.

## Gợi ý khi quay video / chụp ảnh nộp bài
1. Quay toàn màn hình danh thiếp (avatar, tên, card liên hệ).
2. Chạm lần lượt vào 3 dòng: điện thoại (quay lúc màn hình gọi hiện lên),
   email (app mail hiện lên), twitter (trình duyệt mở ra) — rồi quay lại
   app.
3. Thuyết minh: "Đây là Lab 2 - MiCard, dùng View lồng nhau để bố cục và
   Linking API để mở ứng dụng khác khi chạm vào thông tin liên hệ."
4. Chụp 2 ảnh: (a) toàn màn hình danh thiếp, (b) lúc chạm vào 1 dòng liên
   hệ (ví dụ màn hình gọi điện vừa mở).

## Nộp bài
Copy toàn bộ folder `lab2-micard` vào cùng repo Git đang có (ngang hàng
với `lab1-i-am-rich`), sau đó:
```bash
git add .
git commit -m "Lab 2: MiCard - React Native"
git push
```
