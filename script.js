let data = [];

fetch("data.json")
  .then(res => res.json())
  .then(json => data = json);

function search() {
  const name = document.getElementById("name").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const result = document.getElementById("result");

  const found = data.find(
    d => d.name === name && d.phoneLast4 === phone
  );

  if (!found) {
    result.innerHTML = "❌ 조회되는 정보가 없습니다.";
    return;
  }

  result.innerHTML = `
    <div class="result">
      <h3>✅ 조회 성공</h3>
      <p><b>배송방법:</b> ${found.type}</p>
      <p><b>운송장번호:</b> ${found.tracking}</p>
    </div>
  `;
}
