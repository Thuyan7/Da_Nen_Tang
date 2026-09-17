# Lab 1: I Am Rich (React Native)

## Mô tả ứng dụng
Ứng dụng gồm 1 màn hình duy nhất, mô phỏng lại app "đắt nhất App Store" nổi
tiếng. Người dùng thấy biểu tượng kim cương, giá tiền và một nút bấm. Khi
chạm vào nút, một hộp thoại (Modal) hiện lên chúc mừng người dùng.

**Kỹ thuật sử dụng:**
- Functional component + Hook `useState` để lưu trạng thái hiển thị Modal.
- `TouchableOpacity` xử lý sự kiện chạm.
- `Modal` để hiện popup.
- `StyleSheet` để style toàn bộ giao diện (không dùng ảnh ngoài để tránh vấn
  đề bản quyền — thay bằng emoji 💎).

## Cách chạy thử
Cần cài Node.js (đã có) và Expo Go trên điện thoại (tải trên CH Play / App
Store) để xem trực tiếp trên máy thật — cách này dễ quay video demo nhất.

```bash
npm install
npx expo start
```

Sau khi lệnh trên chạy xong, một mã QR sẽ hiện trong terminal. Mở app
**Expo Go** trên điện thoại và quét mã QR đó để chạy app.

(Nếu muốn chạy trên máy ảo Android/iOS thay vì điện thoại thật, dùng
`npm run android` hoặc `npm run ios` — cần cài Android Studio / Xcode
trước.)

## Gợi ý khi quay video / chụp ảnh nộp bài
1. Quay màn hình chính: kim cương, giá tiền, nút bấm.
2. Bấm nút → quay lúc Modal chúc mừng hiện lên → bấm "Đóng" để tắt Modal.
3. Trong video, nói ngắn gọn: đây là lab gì, dùng công nghệ gì (React
   Native + Expo), giải thích 1-2 câu về cách state điều khiển việc hiện/ẩn
   Modal.
4. Chụp 2 ảnh: (a) màn hình chính, (b) màn hình có Modal đang hiện.

## Nộp bài (Git + Google Drive)
```bash
git init
git add .
git commit -m "Lab 1: I Am Rich - React Native"
git branch -M main
git remote add origin <link-repo-cua-ban>
git push -u origin main
```
Sau đó bỏ link video + ảnh chụp màn hình vào 1 folder Google Drive, để chế
độ chia sẻ "Anyone with the link", rồi nộp kèm link Git repo.
