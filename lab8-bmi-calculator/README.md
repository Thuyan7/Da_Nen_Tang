# Lab 8: BMI Calculator (React Native)

## Mô tả ứng dụng
Ứng dụng tính chỉ số BMI: chọn giới tính (Nam/Nữ), chỉnh chiều cao/cân
nặng/tuổi bằng nút (+)/(−), bấm "TÍNH BMI" để ra màn hình kết quả gồm chỉ
số BMI, phân loại (Thiếu cân/Bình thường/Thừa cân/Béo phì) và lời khuyên.

**Trọng tâm của lab: xây dựng UI cho người đã có nền tảng** — bố cục
nhiều "card" bằng View + flexDirection (giống Row/Column bên Flutter),
và tạo **component tái sử dụng** thay vì lặp code.

**Kỹ thuật sử dụng:**
- `components/GenderCard.js`: 1 component dùng chung cho cả 2 card Nam/
  Nữ, chỉ khác icon/label/trạng thái chọn (truyền qua props).
- `components/CounterField.js`: 1 component dùng chung cho cả 3 ô Chiều
  cao/Cân nặng/Tuổi, chỉ khác label/đơn vị/giá trị.
- `utils/bmiCalculator.js`: tách riêng công thức tính BMI và phân loại
  kết quả ra khỏi giao diện.
- Chuyển màn hình Nhập liệu ↔ Kết quả chỉ bằng 1 state `showResult`,
  không cần thư viện Navigation.

## Cách chạy thử
```bash
npm install
npx expo start
```
Quét mã QR bằng Expo Go trên điện thoại.

## Gợi ý khi quay video / chụp ảnh nộp bài
1. Quay màn hình nhập liệu: chọn Nam/Nữ, tăng giảm chiều cao/cân nặng/
   tuổi vài lần.
2. Bấm "TÍNH BMI" — quay màn hình kết quả hiện ra.
3. Bấm "TÍNH LẠI" quay về màn nhập liệu.
4. Thuyết minh: "Đây là Lab 8 - BMI Calculator, minh hoạ cách tạo
   component tái sử dụng (GenderCard, CounterField) và tách công thức
   tính BMI ra file riêng."
5. Chụp 2 ảnh: (a) màn nhập liệu, (b) màn kết quả.

## Gợi ý quay phần code
| File nào | Caption gợi ý |
|---|---|
| `utils/bmiCalculator.js` | "Công thức tính BMI và phân loại kết quả được tách riêng khỏi giao diện" |
| `components/GenderCard.js` | "1 component dùng chung cho cả 2 card Nam/Nữ, khác nhau qua props" |
| `components/CounterField.js` | "1 component dùng chung cho cả 3 ô: chiều cao, cân nặng, tuổi" |
| `App.js` — state `showResult` | "Chỉ cần 1 state để chuyển đổi giữa màn nhập liệu và màn kết quả" |
| `App.js` — `calculateBMI(weight, height)` | "Gọi hàm tính toán đã tách riêng, không tính trực tiếp trong giao diện" |

## Nộp bài
Copy folder `lab8-bmi-calculator` vào cùng repo Git, ngang hàng với các
lab trước, sau đó:
```bash
git add .
git commit -m "Lab 8: BMI Calculator - React Native"
git push
```
