const typeChart = {
    'ノーマル':   {'ノーマル': 1,    'ほのお': 1,   'みず': 1,   'でんき': 1,   'くさ': 1,   'こおり': 1,   'かくとう': 1,   'どく': 1,   'じめん': 1,   'ひこう': 1,   'エスパー': 1,   'むし': 1,   'いわ': 0.5, 'ゴースト': 0,   'ドラゴン': 1,   'あく': 1,   'はがね': 0.5, 'フェアリー': 1},    
    'ほのお':     {'ノーマル': 1,    'ほのお': 0.5, 'みず': 0.5, 'でんき': 1,   'くさ': 2,   'こおり': 2,   'かくとう': 1,   'どく': 1,   'じめん': 1,   'ひこう': 1,   'エスパー': 1,   'むし': 2,   'いわ': 0.5, 'ゴースト': 1,   'ドラゴン': 0.5, 'あく': 1,   'はがね': 2,   'フェアリー': 1},    
    'みず':       {'ノーマル': 1,    'ほのお': 2,   'みず': 0.5, 'でんき': 1,   'くさ': 0.5, 'こおり': 1,   'かくとう': 1,   'どく': 1,   'じめん': 2,   'ひこう': 1,   'エスパー': 1,   'むし': 1,   'いわ': 2,   'ゴースト': 1,   'ドラゴン': 0.5, 'あく': 1,   'はがね': 1,   'フェアリー': 1},    
    'でんき':     {'ノーマル': 1,    'ほのお': 1,   'みず': 2,   'でんき': 0.5, 'くさ': 0.5, 'こおり': 1,   'かくとう': 1,   'どく': 1,   'じめん': 0,   'ひこう': 2,   'エスパー': 1,   'むし': 1,   'いわ': 1,   'ゴースト': 1,   'ドラゴン': 0.5, 'あく': 1,   'はがね': 1,   'フェアリー': 1},    
    'くさ':       {'ノーマル': 1,    'ほのお': 0.5, 'みず': 2,   'でんき': 1,   'くさ': 0.5, 'こおり': 1,   'かくとう': 1,   'どく': 0.5, 'じめん': 2,   'ひこう': 0.5, 'エスパー': 1,   'むし': 0.5, 'いわ': 2,   'ゴースト': 1,   'ドラゴン': 0.5, 'あく': 1,   'はがね': 0.5, 'フェアリー': 1},    
    'こおり':     {'ノーマル': 1,    'ほのお': 0.5, 'みず': 0.5, 'でんき': 1,   'くさ': 2,   'こおり': 0.5, 'かくとう': 1,   'どく': 1,   'じめん': 2,   'ひこう': 2,   'エスパー': 1,   'むし': 1,   'いわ': 1,   'ゴースト': 1,   'ドラゴン': 2,   'あく': 1,   'はがね': 0.5, 'フェアリー': 1},    
    'かくとう':   {'ノーマル': 2,    'ほのお': 1,   'みず': 1,   'でんき': 1,   'くさ': 1,   'こおり': 2,   'かくとう': 1,   'どく': 0.5, 'じめん': 1,   'ひこう': 0.5, 'エスパー': 0.5, 'むし': 0.5, 'いわ': 2,   'ゴースト': 0,   'ドラゴン': 1,   'あく': 2,   'はがね': 2,   'フェアリー': 0.5},    
    'どく':       {'ノーマル': 1,    'ほのお': 1,   'みず': 1,   'でんき': 1,   'くさ': 2,   'こおり': 1,   'かくとう': 1,   'どく': 0.5, 'じめん': 0.5, 'ひこう': 1,   'エスパー': 1,   'むし': 1,   'いわ': 0.5, 'ゴースト': 0.5, 'ドラゴン': 1,   'あく': 1,   'はがね': 0,   'フェアリー': 2},    
    'じめん':     {'ノーマル': 1,    'ほのお': 2,   'みず': 1,   'でんき': 2,   'くさ': 0.5, 'こおり': 1,   'かくとう': 1,   'どく': 2,   'じめん': 1,   'ひこう': 0,   'エスパー': 1,   'むし': 0.5, 'いわ': 2,   'ゴースト': 1,   'ドラゴン': 1,   'あく': 1,   'はがね': 2,   'フェアリー': 1},    
    'ひこう':     {'ノーマル': 1,    'ほのお': 1,   'みず': 1,   'でんき': 0.5, 'くさ': 2,   'こおり': 1,   'かくとう': 2,   'どく': 1,   'じめん': 1,   'ひこう': 1,   'エスパー': 1,   'むし': 2,   'いわ': 0.5, 'ゴースト': 1,   'ドラゴン': 1,   'あく': 1,   'はがね': 0.5, 'フェアリー': 1},    
    'エスパー':   {'ノーマル': 1,    'ほのお': 1,   'みず': 1,   'でんき': 1,   'くさ': 1,   'こおり': 1,   'かくとう': 2,   'どく': 2,   'じめん': 1,   'ひこう': 1,   'エスパー': 0.5, 'むし': 1,   'いわ': 1,   'ゴースト': 1,   'ドラゴン': 1,   'あく': 0,   'はがね': 0.5, 'フェアリー': 1},    
    'むし':       {'ノーマル': 1,    'ほのお': 0.5, 'みず': 1,   'でんき': 1,   'くさ': 2,   'こおり': 1,   'かくとう': 0.5, 'どく': 0.5, 'じめん': 1,   'ひこう': 0.5, 'エスパー': 2,   'むし': 1,   'いわ': 1,   'ゴースト': 0.5, 'ドラゴン': 1,   'あく': 2,   'はがね': 0.5, 'フェアリー': 0.5},    
    'いわ':       {'ノーマル': 1,    'ほのお': 2,   'みず': 1,   'でんき': 1,   'くさ': 1,   'こおり': 2,   'かくとう': 0.5, 'どく': 1,   'じめん': 0.5, 'ひこう': 2,   'エスパー': 1,   'むし': 2,   'いわ': 1,   'ゴースト': 1,   'ドラゴン': 1,   'あく': 1,   'はがね': 0.5, 'フェアリー': 1},    
    'ゴースト':    {'ノーマル': 0,    'ほのお': 1,   'みず': 1,   'でんき': 1,   'くさ': 1,   'こおり': 1,   'かくとう': 1,   'どく': 1,   'じめん': 1,   'ひこう': 1,   'エスパー': 2,   'むし': 1,   'いわ': 1,   'ゴースト': 2,   'ドラゴン': 1,   'あく': 0.5, 'はがね': 1,   'フェアリー': 1},    
    'ドラゴン':    {'ノーマル': 1,    'ほのお': 1,   'みず': 1,   'でんき': 1,   'くさ': 1,   'こおり': 1,   'かくとう': 1,   'どく': 1,   'じめん': 1,   'ひこう': 1,   'エスパー': 1,   'むし': 1,   'いわ': 1,   'ゴースト': 1,   'ドラゴン': 2,   'あく': 1,   'はがね': 0.5, 'フェアリー': 0},    
    'あく':       {'ノーマル': 1,    'ほのお': 1,   'みず': 1,   'でんき': 1,   'くさ': 1,   'こおり': 1,   'かくとう': 0.5, 'どく': 1,   'じめん': 1,   'ひこう': 1,   'エスパー': 2,   'むし': 1,   'いわ': 1,   'ゴースト': 2,   'ドラゴン': 1,   'あく': 0.5, 'はがね': 1,   'フェアリー': 0.5},    
    'はがね':     {'ノーマル': 1,    'ほのお': 0.5, 'みず': 0.5, 'でんき': 0.5, 'くさ': 1,   'こおり': 2,   'かくとう': 1,   'どく': 1,   'じめん': 1,   'ひこう': 1,   'エスパー': 1,   'むし': 1,   'いわ': 2,   'ゴースト': 1,   'ドラゴン': 1,   'あく': 1,   'はがね': 0.5, 'フェアリー': 2},    
    'フェアリー':  {'ノーマル': 1,    'ほのお': 0.5, 'みず': 1,   'でんき': 1,   'くさ': 1,   'こおり': 1,   'かくとう': 2,   'どく': 0.5, 'じめん': 1,   'ひこう': 1,   'エスパー': 1,   'むし': 1,   'いわ': 1,   'ゴースト': 1,   'ドラゴン': 2,   'あく': 2,   'はがね': 0.5, 'フェアリー': 1}};

let currentQuestion = {}; // 現在の質問を格納する変数
let correctAnswer; // 正解を格納する変数

// ページが読み込まれた時に最初の質問を生成
window.onload = function() {
    correctAnswer = generateQuestion();
};


// 新しい質問を生成し、表示する関数
function generateQuestion() {
    // 攻撃タイプと防御タイプをランダムに選択
    let attackTypes = Object.keys(typeChart);
    let attackType = attackTypes[Math.floor(Math.random() * attackTypes.length)];
    let defenseTypes = Object.keys(typeChart[attackType]);
    let defenseType = defenseTypes[Math.floor(Math.random() * defenseTypes.length)];

    // 現在の質問を更新
    currentQuestion = {
        attackType: attackType,
        defenseType: defenseType
    };

    // 正解の効果を取得
    let correctEffect = typeChart[attackType][defenseType];

    // 質問文を表示
    document.getElementById('questionArea').innerHTML = `攻撃タイプ: ${attackType}<br>防御タイプ: ${defenseType}<br>この攻撃はどれぐらい通る？`;

    return correctEffect; // 正解を返す
}

// ユーザーの回答をチェックする関数
function checkAnswer(userAnswer) {
  let resultElement = document.getElementById('result');
  let explanationElement = document.getElementById('explanation');
  let answerButtonsArea = document.getElementById('answerButtonsArea'); // 回答ボタンエリアのID
  let nextQuestionButton = document.getElementById('nextQuestionButton'); // 「次の問題」ボタンのID

  // 正誤の判定
  if (userAnswer === correctAnswer) {
      resultElement.innerHTML = '〇 正解！';
      resultElement.className = 'correct';
  } else {
      resultElement.innerHTML = '× 不正解！';
      resultElement.className = 'incorrect';
  }

  // 解説テキストを設定
  let explanationText = generateExplanation();
  explanationElement.innerHTML = explanationText;

  // 回答ボタンエリアを非表示にし、「次の問題」ボタンを表示
  answerButtonsArea.style.display = 'none';
  nextQuestionButton.style.display = 'block';
}

// 次の質問を生成する関数
function nextQuestion() {
  let resultElement = document.getElementById('result');
  let explanationElement = document.getElementById('explanation');
  let answerButtonsArea = document.getElementById('answerButtonsArea');
  let nextQuestionButton = document.getElementById('nextQuestionButton');

  // 正誤の結果と説明をクリア
  resultElement.innerHTML = '';
  explanationElement.innerHTML = '';

  // 新しい質問を生成
  correctAnswer = generateQuestion();

  // 回答ボタンエリアを再表示し、「次の問題」ボタンを非表示に
  answerButtonsArea.style.display = 'block';
  nextQuestionButton.style.display = 'none';
}



// 現在の質問に基づいて解説を生成する関数
function generateExplanation() {
  let attackType = currentQuestion.attackType; // 攻撃タイプを取得
  let effects = typeChart[attackType]; // 攻撃タイプの効果を取得

  // 各カテゴリに対応する防御タイプを格納するための配列
  let superEffective = []; // 効果バツグン
  let notVeryEffective = []; // あまり効果なし
  let noEffect = []; // 効果なし

  for (let defenseType in effects) {
      let effect = effects[defenseType];
      switch(effect) {
          case 2:
              superEffective.push(defenseType);
              break;
          case 0.5:
              notVeryEffective.push(defenseType);
              break;
          case 0:
              noEffect.push(defenseType);
              break;
      }
  }

  // 解説テキストの生成
  let explanation = `「${attackType}」のタイプ相性：<br>`;

  if (superEffective.length > 0) {
      explanation += `2倍: ${superEffective.join(', ')}<br>`;
  }
  if (notVeryEffective.length > 0) {
      explanation += `0.5倍: ${notVeryEffective.join(', ')}<br>`;
  }
  if (noEffect.length > 0) {
      explanation += `0倍: ${noEffect.join(', ')}<br>`;
  }

  return explanation;
}
