$(function(){
  function create_table(){
    var data = $(".sudoku-table").data("question").split("")
    let parent = $(".sudoku-table tbody");
    var html = "";
    for(var i = 0; i < 9; i++){
      if(i == 2 || i == 5){
        html += `<tr class="bottom-border">`;
      }else{
        html += `<tr>`;
      }
      for(var j = 0; j < 9;j++){
        if(data[i*9+j] !== "0"){
          if(j == 2 || j == 5){
            html += `<td class="right-border"><input type="number" class="sudoku-cell grayout" id="c${i}_${j}" value='${data[i*9+j]}' disabled maxlength="1" pattern="^[1-9]{1}$"></td>`;
          }else{
            html += `<td><input type="number" class="sudoku-cell grayout" id="c${i}_${j}" value='${data[i*9+j]}' disabled maxlength="1" ></td>`;
          }
        }else{
          if(j == 2 || j == 5){
            html += `<td class="right-border"><input type="number" class="sudoku-cell" id="c${i}_${j}" maxlength="1" pattern="^[1-9]{1}$"></td>`;
          }else{
            html += `<td><input type="number" class="sudoku-cell" id="c${i}_${j}" maxlength="1" ></td>`;
          }
        }
      }
      html += `</tr>`;

    }
    parent.append(html);
  }
  create_table();

});
