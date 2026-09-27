

export function calculateBMI(weightKg, heightCm) {
  const heightM = heightCm / 100;
  const bmi = weightKg / (heightM * heightM);
  return Math.round(bmi * 10) / 10; 
}

export function getBMICategory(bmi) {
  if (bmi < 18.5) {
    return { label: 'Thiếu cân', advice: 'Bạn nên ăn uống đầy đủ hơn.', color: '#3aa0ff' };
  } else if (bmi < 25) {
    return { label: 'Bình thường', advice: 'Cân nặng của bạn đang ở mức lý tưởng!', color: '#3ddc84' };
  } else if (bmi < 30) {
    return { label: 'Thừa cân', advice: 'Bạn nên chú ý chế độ ăn và vận động.', color: '#ffb340' };
  } else {
    return { label: 'Béo phì', advice: 'Nên tham khảo ý kiến bác sĩ về chế độ dinh dưỡng.', color: '#ff5a5f' };
  }
}
