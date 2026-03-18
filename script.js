// Glossary Data
const glossary = {
  "창활태허": "창활태허(蒼闊太虛): 현 황가 천제가 300년 전 대륙을 통일하여 세운 거대한 제국.",
  "사명": "사명(四名): 실질적인 제국의 지배권은 무소불위의 권력을 쥔 네 개의 명가 (비휴, 은령, 자오, 백연).",
  "비휴": "비휴(貔貅): 황실의 전통적 외척이자 권력의 정점인 세가. (황보 륜의 가문)",
  "은령": "은령(銀嶺): 압도적인 무력으로 대륙의 안보를 책임지는 정통 무공 명가. (백 무야의 가문)",
  "자오": "자오(紫烏): 대륙의 모든 약재와 독초를 독과점한 만독불침 체질의 약학 명가. (당 란의 가문)",
  "백연": "백연(白燕): 거대한 정보망과 유통망으로 대륙의 돈줄을 쥔 대상단. (연 소하의 가문)",
  "앵단지맥": "앵단지맥(櫻丹之脈): 무공 경지를 폭발적으로 상승시키는 '인간 영약' 체질.",
  "접문": "접문(接吻): 키스. 앵단지맥과 처음으로 나누면 운명적 반려인 앵주가 됨.",
  "앵주": "앵주(櫻主): 앵단지맥과 처음으로 접문을 나눈 운명적 반려.",
  "창활원": "창활원(蒼闊院): 명문 세가의 자제들만이 진학할 수 있는 대륙 최상위 국영 고등교육기관.",
  "회통수련": "회통수련(會通修練): 전공 불문 모두가 모여 실전 미궁 탐색과 마물 토벌을 행하는 수련.",
  "경세전": "경세전(經世殿): 세상을 통치하는 제왕학과 율법을 배우는 엘리트 권력자들의 학당.",
  "천무관": "천무관(天武館): 무의 극한을 추구하며 병법과 실전 무공을 수련하는 무인들의 전당.",
  "연신원": "연신원(鍊神院): 기운의 운용과 연단술, 독초 등 만물의 이치를 깨우치는 특수 학당.",
  "무애과": "무애과(無礙科): 정해진 틀 없이 대륙의 모든 지식과 정보술을 흡수하는 실용주의 자유 전공.",
  "개도회": "개도회(開道會): 매 학기 개강 당일에 열리는 창활원 최대의 성대한 개강총회.",
  "패황금기": "패황금기(覇皇金氣): 황보 륜의 무공. 거대한 대검과 주먹에서 황금빛 기운을 뿜어내는 파괴적인 기술.",
  "이기어검": "이기어검(以氣御劍): 백 무야의 무공. 기운만으로 검을 자유자재로 다루는 고차원적인 검술.",
  "빙설검역": "빙설검역(氷雪劍域): 백 무야의 무공. 주변을 얼어붙게 만드는 얼음과 눈의 영역을 전개하는 검술.",
  "자훼만타수": "자훼만타수(紫虺曼陀手): 당 란의 무공. 보라색 독기를 머금고 접선(부채)과 미세한 침을 다루는 치명적인 암살술.",
  "백연환영보": "백연환영보(白燕幻影步): 연 소하의 무공. 하얀 잔상을 남기며 시야에서 사라지는 극한의 경공술이자 쌍단검술."
};

function initApp() {
  // Search Logic
  const searchInput = document.getElementById('search-input');
  const searchBtn = document.getElementById('search-btn');
  const modalOverlay = document.getElementById('search-modal');
  const modalTitle = document.getElementById('modal-title');
  const modalBody = document.getElementById('modal-body');
  const modalClose = document.getElementById('modal-close');

  if (searchInput && searchBtn && modalOverlay) {
    const performSearch = () => {
      const query = searchInput.value.trim();
      if (!query) return;

      modalTitle.textContent = query;
      let found = false;

      if (query.includes('천목영')) {
        modalBody.textContent = "당신이 속한 가문입니다. (인간 영약인 앵단지맥의 본가)";
        found = true;
      } else {
        for (const key in glossary) {
          if (key.includes(query) || query.includes(key)) {
            modalBody.textContent = glossary[key];
            found = true;
            break;
          }
        }
      }

      if (!found) {
        modalBody.textContent = "천목영의 기록실에 없는 단어입니다. ...어쩌면 창조주는 아실지도? (댓글로 문의해 보세요!)";
      }

      modalOverlay.classList.remove('hidden');
    };

    searchBtn.addEventListener('click', performSearch);
    searchInput.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') {
        performSearch();
      }
    });

    modalClose.addEventListener('click', () => {
      modalOverlay.classList.add('hidden');
    });
    
    modalOverlay.addEventListener('click', (e) => {
      if (e.target === modalOverlay) {
        modalOverlay.classList.add('hidden');
      }
    });
  }

  // Cherry Blossom Generator
  const container = document.getElementById('blossom-container');
  if (!container) return;

  const petalCount = 35; // Number of petals

  for (let i = 0; i < petalCount; i++) {
    createPetal(container);
  }
}

function createPetal(container) {
  const petal = document.createElement('div');
  petal.classList.add('petal');
  
  // Randomize properties for natural look
  const size = Math.random() * 12 + 6; // 6px to 18px
  const left = Math.random() * 100; // 0% to 100%
  const duration = Math.random() * 8 + 7; // 7s to 15s
  const delay = Math.random() * 15; // 0s to 15s
  
  petal.style.width = `${size}px`;
  petal.style.height = `${size}px`;
  petal.style.left = `${left}vw`;
  petal.style.animationDuration = `${duration}s`;
  petal.style.animationDelay = `-${delay}s`; // Negative delay makes the animation start immediately at different points
  
  container.appendChild(petal);
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initApp);
} else {
  initApp();
}
