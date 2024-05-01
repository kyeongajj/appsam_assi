  //Style Option
  const options = {
    //노드_모양
    shape: {
      rectangle:'rectangle',
      diamond:'diamond',
      circle:'circle'
    },
    //노드_width, height
    width: 80,
    height : 50,
    //보더_두께 
    border: 3,
    //Row_height
    rows: {
      index: 1,
      rowHeight: 150,
    },
    //화살표_칼라 {'시작', '끝', '몸통'}/ 보더_칼라
    color:{
      criticla:'#ee253b', //빨강색
      normal:'#44cc77', //초록색
      minor:'#fbbc06', //노랑색
      gray:'#989797', //은색
    }
  }

  // HTML 엘리먼트 생성 및 클래스명 설정 "red"
  var elements = [
    { type: 'circle', text: '유큐브' },
    { type: 'rectangle red', text: '사각형rectangle이라고말하는것이다다다다다' },
    { type: 'diamond', text: 'APIM' },
    { type: 'rectangle', text: '사각형rectangle이라고말하는것이다다다다다' },
    { type: 'circle', text: 'UCube' },
    { type: 'circle', text: 'NTOSS' },
    { type: '', text: '' } // 마지막 엘리먼트는 비어있음
  ];

  // 테이블 엘리먼트 생성
  var table = document.createElement('table');

  // 행을 추가하고 각 엘리먼트에 대해 셀을 생성하여 표에 추가
  elements.forEach(function(element) {
    var row = table.insertRow();
    var cell = row.insertCell();
    cell.className = 'flow_cell nodes';
    
    // 동적으로 클래스명 추가하여 스타일 객체 만들기
    var shapeClass = 'node_shape ';
    if (element.type === 'rectangle') {
        shapeClass += 'rectangle criticla';
    } else if (element.type === 'circle') {
        shapeClass += 'circle minor';
    } else if (element.type === 'diamond') {
        shapeClass += 'diamond normal';
    }
    
    // 빨간색 스타일을 적용하기 위해 클래스명 검사
    if (element.type.includes('red')) {
        cell.style.width = '150px';
        cell.style.height = '80px';
        cell.style.backgroundColor = 'red';
        cell.style.borderWidth = '2px';
        cell.style.borderColor = 'white';
    }
    
    // 엘리먼트 생성 및 속성 설정
    var div = document.createElement('div');
    div.className = shapeClass;
    div.innerHTML = '<span>' + element.text + '</span>';
    
    // 엘리먼트를 셀에 추가
    cell.appendChild(div);
  });

  // 생성한 테이블을 문서에 추가
  let umlDiagram = document.getElementById("#umlDiagram");
  umlDiagram.appendChild(table);

  document.addEventListener('DOMContentLoaded', populateTable);
