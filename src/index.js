import _ from 'lodash';

let arr = [];

function addRandomNum() {
  let p = document.createElement('p');
  const randomNum = _.random(0, 10);
  p.innerHTML = "Random Number: " + randomNum.toString();
  document.body.appendChild(p)

  // 「配列の箱の中の値が5つになったら、配列の箱の中にこれ以上値を増やさない」
  // 「配列の箱の中の値が5つ未満であれば、配列の値を後ろにどんどん追加していく」
  if (arr.length == 5) {
    arr.shift();
  } 
  arr.push(randomNum);
  console.log(arr);
}

{
  const button1 = document.getElementById('button1')
  button1.addEventListener("click", addRandomNum);
  console.log("ready");
}
