//Style Option
const options = {
  //노드_모양
  shape: {
    'rectangle':'rectangle',
    'diamond':'diamond',
    'circle':'circle'
  },
  //노드_width, height
  width: 80,
  height : 50,
  //보더_두께 
  border: 3,
  //Row_height
  rowHeight: 150,
  //화살표_칼라 {'시작', '끝', '몸통'}/ 보더_칼라
  color:{
    'criticla':'#ee253b', //빨강색
    'normal':'#44cc77', //초록색
    'minor':'#fbbc06', //노랑색
    'gray':'#989797' //은색
  }
}


document.addEventListener("DOMContentLoaded", function() {
  if(options){
    //노드들의 칼라/모양/두께 변경
    console.log(Object.keys(options.shape));
    //[ 'rectangle', 'diamond', 'circle' ]

    let node = $('.node_shape');
    node.each(function(){
      //node에 'rectangle'클래스명이 있으면, 배경색을 'criticla'로 바꾼다
      if($(this).hasClass('criticla')){
        $(this).css('background-color', options.color['criticla']); 
      }
      if($(this).hasClass('minor')){
        $(this).css('background-color', options.color['minor']);
        $(this).css('border-width', options.border);
      }
      if($(this).hasClass('normal')){
        $(this).css('background-color', options.color['normal']);
      }
      if($(this).hasClass('gray')){
        $(this).css('background-color', options.color['gray']);
        $(this).css('border-color', options.color['criticla']);
      }
    })

    //title텍스트 칼라 변경
    let title = $('h1');
    title.css('color', options.color['criticla']);

    //rowHeight클래스 추가로 row의 높이값 조절
    let rows = $('.flow_table tr');
    $(rows[3]).addClass('rowHeight');
    if(rows.hasClass('rowHeight')){
      $('.rowHeight').css('height', options.rowHeight + 'px');
    }
    
    
  }
});

