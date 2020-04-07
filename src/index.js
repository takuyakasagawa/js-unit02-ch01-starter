import _ from 'lodash';

function addRandomNum() {
  let p = document.createElement('p')
  p.innerHTML = "Random Number: " + _.random(0, 10).toString();
  document.body.appendChild(p)

  // 「配列の箱の中の値が5つになったら、配列の箱の中にこれ以上値を増やさない」
  // 「配列の箱の中の値が5つ未満であれば、配列の値を後ろにどんどん追加していく」
  //let arr = [];
  //for (let i = 0; i < 4; i++) {
  //  console.log(arr[i]);
  //}
}

{
  const button1 = document.getElementById('button1')
  button1.addEventListener("click", addRandomNum);
  console.log("ready");
}
