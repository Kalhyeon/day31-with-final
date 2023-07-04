const API = 'http://sample.bmaster.kro.kr/contacts';
// 변수의 이름이 모두 대문자이면, 보통 변경하거나 건드리지 말아야 한다는 무언의 암시를 준다.

// 1. location.search 에서 pageno 를 꺼내어 리턴하는 함수
function getPageno() {
  const p = new URLSearchParams(location.search);
  return p.get('pageno')===null? 1:p.get('pageno');
}

// 2. pageno 로 ajax 하여 결과를 리턴, 통신이 실패하면 null 을 리턴
async function fetch(pageno, pagesize=10) {
  const url = `${API}?pageno=${pageno}&pagesize=${pagesize}`;
  try {
    return await $.ajax(url);
  }catch(err) {
    console.log(err);
    return null;
  }
}

function printContacts(contacts) {
  const $tbody = $('#tbody');
  for(const c of contacts) {
    const html = `
      <tr>
        <td>${c.no}</td>
        <td>${c.name}</td>
        <td>${c.address}</td>
        <td>${c.tel}</td>
      </tr>
    `;
  };
  $tbody.append(html);
}

function getPagination() {

}

function printPagination() {

}