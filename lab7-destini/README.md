# Lab 7 - Boss Level Challenge 2: Destini (React Native)

## Mô tả ứng dụng
Game phiêu lưu kiểu "chọn lối đi riêng" (choose-your-own-adventure). Mỗi
màn hình hiện 1 đoạn truyện + 2 lựa chọn. Chọn lựa chọn nào sẽ dẫn tới 1
đoạn truyện khác. Câu chuyện có tổng cộng **6 kết thúc khác nhau** (3 kết
thúc tốt ✨, 3 kết thúc xấu 💀) tùy theo các lựa chọn của người chơi. Ở
màn kết thúc có nút "Chơi lại từ đầu".

**Đây là bài Boss Level Challenge (tự làm)** — áp dụng lại kiến thức
`useState` (Dicee) và cách modularise code (Quizzler) vào 1 bài toán khó
hơn: quản lý nhiều nhánh rẽ của 1 câu chuyện.

**Kỹ thuật sử dụng:**
- Toàn bộ cốt truyện lưu dưới dạng **1 object đồ thị** trong
  `data/story.js` — mỗi node có `text` + `choices` (mỗi lựa chọn trỏ tới
  `nextId` là 1 node khác), hoặc `isEnding: true` nếu là kết thúc.
- **Chỉ cần 1 state duy nhất**: `currentNodeId` — cho biết đang ở node
  nào. Đổi state này là đủ để hiện đúng đoạn truyện tiếp theo, không cần
  dùng Navigator hay nhiều màn hình như cách làm thông thường.
- Component `StoryScreen` tách riêng, chỉ lo hiển thị text + nút, nhận
  dữ liệu qua props.

## Cấu trúc file
```
lab7-destini/
├── App.js                       ← quản lý state currentNodeId
├── data/
│   └── story.js                 ← toàn bộ cốt truyện (12 node, 6 kết thúc)
└── components/
    └── StoryScreen.js           ← hiển thị 1 đoạn truyện + lựa chọn
```

## Cách chạy thử
```bash
npm install
npx expo start
```
Quét mã QR bằng Expo Go trên điện thoại.

## Gợi ý khi quay video / chụp ảnh nộp bài
1. Quay từ màn hình đầu, thử đi theo 1 nhánh dẫn tới **1 kết thúc tốt**.
2. Bấm "Chơi lại từ đầu", đi theo nhánh khác dẫn tới **1 kết thúc xấu**
   — để chứng minh app có nhiều nhánh/kết thúc khác nhau.
3. Thuyết minh: "Đây là Lab 7 - Destini, toàn bộ cốt truyện được lưu
   dưới dạng đồ thị các node trong 1 file riêng. App chỉ cần theo dõi 1
   state là đang ở node nào, không cần dùng Navigator."
4. Chụp 2 ảnh: (a) 1 màn hình lựa chọn giữa truyện, (b) 1 màn hình kết
   thúc.

## Gợi ý quay phần code
| File nào | Caption gợi ý |
|---|---|
| `data/story.js` — object `STORY` | "Cốt truyện lưu dưới dạng đồ thị: mỗi node có text và các lựa chọn trỏ tới node khác" |
| `data/story.js` — node có `isEnding: true` | "Node kết thúc không có choices, có thêm cờ isGood để biết kết thúc tốt/xấu" |
| `App.js` — `useState(START_NODE_ID)` | "Chỉ cần 1 state duy nhất: đang ở node nào trong cốt truyện" |
| `App.js` — `handleChoose(nextId)` | "Chọn xong chỉ cần đổi state sang nextId, giao diện tự render lại" |
| `components/StoryScreen.js` | "Component riêng lo hiển thị, không biết gì về cấu trúc cốt truyện" |

## Nộp bài
Copy folder `lab7-destini` vào cùng repo Git, ngang hàng với các lab
trước, sau đó:
```bash
git add .
git commit -m "Lab 7: Destini - React Native"
git push
```
