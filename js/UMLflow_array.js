let NodeElement = [
  [
    {name: "nodes", type: "gap", text:""}, //tr
    {name: "nodes", type: "circle", text:"헬로비전"}, 
    {name: "nodes", type: "rectangle", text:"사각형사각형사각형사각형"},
    {name: "nodes", type: "diamond", text:"APIM"},
    {name: "nodes", type: "rectangle", text:"사각형사각형사각형사각형"},
    {name: "nodes", type: "circle", text:"UCube"},
    {name: "nodes", type: "circle gap", text:"UCube"}
  ],
  [
    {name: "nodes", type: "gap", text:""}, //tr
    {name: "nodes", type: "", text:""}, 
    {name: "nodes", type: "", text:""},
    {name: "nodes", type: "", text:""},
    {name: "nodes", type: "", text:""},
    {name: "nodes", type: "", text:""},
    {name: "nodes", type: "gap", text:""}
  ]
];



// 1.nodeTable생성
const nodeTable = document.createElement("table");
const tbody = document.createElement("tbody");


NodeElement.forEach( (items) => {
  const row = document.createElement("tr");

  items.forEach((item,index)=>{ 
    const cell = document.createElement("td");
      cell.className = item.name; //.nodes <td>
      if (item.type === 'gap') {cell.classList.add("gap");}

      // 동적으로 클래스명 추가하여 스타일 객체 만들기
      var flowShape = 'node_shape '; //노드.node_shape
      if (item.type === 'rectangle' || item.type.includes('rectangle')) {
        flowShape += 'rectangle criticla'; //노드 rectangle/빨강색상
      } else if (item.type === 'circle' || item.type.includes('circle')) {
        flowShape += 'circle minor'; //노드 circle/노랑색상
      } else if (item.type === 'diamond' || item.type.includes('diamond')) { 
        flowShape += 'diamond normal'; //노드 diamond/초록색상
      } else if (item.type === 'gap' || item.type === '') { 
        flowShape += 'gap'; //노드 diamond/초록색상
      }
      const div = document.createElement("div");
      div.className = flowShape;
      div.innerHTML = `<span>${item.text}</span>`;
      cell.appendChild(div);

      //특정셀에 클래스명 추가
      if (index === 0 && item.type === "rectangle") {
        cell.classList.add("custom");
      }
      row.appendChild(cell);
  });//items
  tbody.appendChild(row);
});//NodeElement
nodeTable.appendChild(tbody);
let umlDiagramNode = document.getElementById("umlDiagramNode");
umlDiagramNode.appendChild(nodeTable);


let FlowElement = [
  [
    {name: "flow_cell ", type: "gap", direction:"", arrowbody:"", arrowstart:"", title:"", tooltip:""},
    {name: "flow_cell", type: "normal", direction:"head_left", arrowbody:"arrowbody", arrowstart:"start", title:"타이틀입니다", tooltip:"툴팁내용입니다"},
    {name: "flow_cell", type: "criticla", direction:"", arrowbody:"arrowbody", arrowstart:"", title:"타이틀입니다", tooltip:"툴팁내용입니다"},
    {name: "flow_cell", type: "minor", direction:"head_left", arrowbody:"arrowbody", arrowstart:"start", title:"타이틀입니다", tooltip:"툴팁내용입니다"},
    {name: "flow_cell", type: "normal", direction:"", arrowbody:"arrowbody", arrowstart:"start", title:"타이틀입니다", tooltip:"툴팁내용입니다"},
    {name: "flow_cell", type: "normal", direction:"head_right", arrowbody:"arrowbody", arrowstart:"start", title:"타이틀입니다", tooltip:"툴팁내용입니다"},
    {name: "flow_cell", type: "gap", direction:"", arrowbody:"", arrowstart:"", title:"", tooltip:""}
  ],
  [
    {name: "flow_cell ", type: "gap", direction:"", arrowstart:"", title:"", tooltip:""},
    {name: "flow_cell", type: "normal", direction:"head_left", arrowstart:"start", title:"타이틀입니다", tooltip:"툴팁내용입니다"},
    {name: "flow_cell", type: "criticla", direction:"",arrowstart:"", title:"타이틀입니다", tooltip:"툴팁내용입니다"},
    {name: "flow_cell", type: "minor", direction:"head_left", arrowstart:"start", title:"타이틀입니다", tooltip:"툴팁내용입니다"},
    {name: "flow_cell", type: "normal", direction:"head_right", arrowstart:"start", title:"타이틀입니다", tooltip:"툴팁내용입니다"},
    {name: "flow_cell", type: "normal", direction:"head_right", arrowstart:"start", title:"타이틀입니다", tooltip:"툴팁내용입니다"},
    {name: "flow_cell", type: "gap", direction:"", arrowstart:"", title:"", tooltip:""}
  ],[
    {name: "flow_cell ", type: "gap", direction:"", arrowstart:"", title:"", tooltip:""},
    {name: "flow_cell", type: "normal", direction:"head_left", arrowstart:"start", title:"타이틀입니다", tooltip:"툴팁내용입니다"},
    {name: "flow_cell", type: "criticla", direction:"",arrowstart:"", title:"타이틀입니다", tooltip:"툴팁내용입니다"},
    {name: "flow_cell", type: "minor", direction:"head_left", arrowstart:"start", title:"타이틀입니다", tooltip:"툴팁내용입니다"},
    {name: "flow_cell", type: "normal", direction:"head_right", arrowstart:"start", title:"타이틀입니다", tooltip:"툴팁내용입니다"},
    {name: "flow_cell", type: "normal", direction:"head_right", arrowstart:"start", title:"타이틀입니다", tooltip:"툴팁내용입니다"},
    {name: "flow_cell", type: "gap", direction:"", arrowstart:"", title:"", tooltip:""}
  ]
];
// 2.flowTable생성
const flowTable = document.createElement("table");
const flowtbody = document.createElement("tbody");

FlowElement.forEach( (items) => {
  const row = document.createElement("tr"); //tr은 3개 만들어진다.

  items.forEach((item,index)=>{  
    
      const cell = document.createElement("td");
      cell.className = item.name; //.flow_cell <td>
      if (item.type === 'gap') {cell.classList.add("gap");}

      // 동적으로 클래스명 추가하여 스타일 객체 만들기
      var flowShape = 'arrow_box '; //화살표_box
      if (item.type === 'normal') { 
        flowShape += 'normal'; //화살표색상_초록
      } else if (item.type === 'criticla') { 
        flowShape += 'criticla'; //화살표색상_빨강
      } else if (item.type === 'minor') { 
        flowShape += 'normal'; //화살표색상_노랑
      } 
      const div1 = document.createElement("div");
      div1.className = 'arrow_box';
      div1.innerHTML = 
        `<span class="${item.direction}"></span>
        <span class="${item.direction ? 'arrowbody' : ""}"></span>`;
      cell.appendChild(div1);

      const div2 = document.createElement("div");
      div2.className = 'titleBox';
      div2.innerHTML = `<h5>${item.title}</h5>`;
      cell.appendChild(div2);

      const div3 = document.createElement("div");
      div3.className = 'flow_cell_tooltip';
      div3.innerHTML = `<pre>${item.tooltip}</pre>`;
      cell.appendChild(div3);

      const div4 = document.createElement("div");
      div4.className = 'end_box';
      div4.innerHTML = `<span class="${item.direction ? 'arrowend' : ""}"></span>`;
      cell.appendChild(div4);


      //특정셀에 클래스명 추가
      if (index === 1 && item.type === "criticla") {
        cell.classList.add("custom");
      }
      row.appendChild(cell);
      
  });//items
  flowtbody.appendChild(row);
});//NodeElement
flowTable.appendChild(flowtbody);
let umlDiagramFlow = document.getElementById("umlDiagramFlow");
umlDiagramFlow.appendChild(flowTable);