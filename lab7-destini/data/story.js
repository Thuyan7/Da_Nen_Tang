

export const STORY = {
  start: {
    text:
      'Bạn tỉnh dậy giữa một khu rừng lạ, không nhớ gì về việc mình đến ' +
      'đây bằng cách nào. Phía trước có 2 lối đi.',
    choices: [
      { label: 'Đi vào rừng rậm', nextId: 'forest' },
      { label: 'Đi về phía tiếng nước chảy', nextId: 'river' },
    ],
  },

  forest: {
    text:
      'Bạn đi sâu vào rừng và thấy 1 căn nhà gỗ cũ kỹ, cùng lối mòn dẫn ' +
      'tới 1 hang động tối.',
    choices: [
      { label: 'Vào căn nhà gỗ', nextId: 'house' },
      { label: 'Đi vào hang động', nextId: 'cave' },
    ],
  },

  river: {
    text: 'Bạn tới bờ sông. Có 1 chiếc thuyền cũ neo gần đó, và dòng nước chảy khá xiết.',
    choices: [
      { label: 'Lên thuyền chèo qua sông', nextId: 'boat' },
      { label: 'Liều mình bơi qua', nextId: 'ending_bad_swim' },
    ],
  },

  house: {
    text: 'Trong nhà có 1 cây đèn cổ đang phát sáng kỳ lạ trên bàn.',
    choices: [
      { label: 'Chạm vào cây đèn', nextId: 'ending_good_lamp' },
      { label: 'Bỏ chạy ngay lập tức', nextId: 'ending_bad_dark' },
    ],
  },

  cave: {
    text: 'Trong hang có tiếng gầm gừ nhỏ — dường như có 1 sinh vật đang ở đó.',
    choices: [
      { label: 'Nhẹ nhàng tiến lại gần', nextId: 'ending_good_dragon' },
      { label: 'Ném đá vào trong hang', nextId: 'ending_bad_dragon' },
    ],
  },

  boat: {
    text: 'Thuyền trôi giữa dòng, phía xa có 1 hòn đảo nhỏ và 1 cơn giông đang kéo tới.',
    choices: [
      { label: 'Chèo nhanh vào đảo', nextId: 'ending_good_island' },
      { label: 'Cố chèo ngược dòng để quay lại', nextId: 'ending_bad_storm' },
    ],
  },

  ending_good_lamp: {
    text:
      'sKẾT THÚC TỐT: Cây đèn hóa ra là 1 vật phép giúp bạn tìm được ' +
      'đường về nhà an toàn. Chúc mừng bạn!',
    isEnding: true,
    isGood: true,
  },
  ending_good_dragon: {
    text:
      'KẾT THÚC TỐT: Sinh vật trong hang chỉ là 1 chú rồng con bị lạc. ' +
      'Nó dẫn bạn ra khỏi rừng an toàn.',
    isEnding: true,
    isGood: true,
  },
  ending_good_island: {
    text:
      'KẾT THÚC TỐT: Bạn kịp vào đảo trú ẩn trước cơn giông và được 1 ' +
      'đoàn thám hiểm cứu vào sáng hôm sau.',
    isEnding: true,
    isGood: true,
  },
  ending_bad_dark: {
    text: 'KẾT THÚC XẤU: Bạn chạy trong bóng tối và bị lạc sâu hơn vào rừng.',
    isEnding: true,
    isGood: false,
  },
  ending_bad_dragon: {
    text: 'KẾT THÚC XẤU: Bạn đã đánh thức 1 con thú lớn hơn nhiều so với tưởng tượng.',
    isEnding: true,
    isGood: false,
  },
  ending_bad_swim: {
    text: 'KẾT THÚC XẤU: Dòng nước quá xiết đã cuốn bạn đi mất.',
    isEnding: true,
    isGood: false,
  },
  ending_bad_storm: {
    text: 'KẾT THÚC XẤU: Cơn giông ập đến trước khi bạn kịp quay lại bờ.',
    isEnding: true,
    isGood: false,
  },
};

export const START_NODE_ID = 'start';
