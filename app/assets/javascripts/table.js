$(function(){
  function create_table(){
    let parent = $(".sudoku-table tbody");
    var html = ""
    var data = ""
    for(var i = 0; i < 9; i++){
      if(i == 2 || i == 5){
        html += `<tr class="bottom-border">`
      }else{
        html += `<tr>`
      }
      for(var j = 0; j < 9;j++){
        if(j == 2 || j == 5){
          html += `<td class="right-border"><input class="sudoku-cell" id="c${i}_${j}" value='${data}' maxlength="1" pattern="^[1-9]{1}$"></td>`
        }else{
          html += `<td><input class="sudoku-cell" id="c${i}_${j}" value='${data}' maxlength="1" ></td>`
        }
      }
      html += `</tr>`

    }
    parent.append(html);
  }

  create_table();
  reloadData();
});
