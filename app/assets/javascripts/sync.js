$(function(){

  function set_table_data(data){
    let parent = $(".sudoku-table tbody tr td input").val("");
    for(var i = 0; i < 9; i++){
      for(var j = 0; j < 9;j++){
        if(data[i * 9 + j] == "0"){
          data[i * 9 + j] = "";
          $(`#c${i}_${j}`).val(data[i * 9 + j]);
          data[i * 9 + j] = "";
        }else{
          $(`#c${i}_${j}`).val(data[i * 9 + j]);
        }
      }
    }
  }
  function get_table_data(){
    var array = [];
    $("td").children().each(function(){
      if ($(this).val() == ""){
        array.push("0");
      } else {
        array.push($(this).val());
      }
    });
    return array.join("");
  }

  $(document).on("keyup", ".sudoku-cell",function(event){
    if(event.key== "0"){
      $(this).val("");
      return false;
    }else if($(this).val().length > 1){
      $(this).val(event.key);
    }
    var puzzle_id = $(".sudoku-table").attr("data-puzzle-id");
    var array = get_table_data();
    $.ajax({
      method: "patch",
      url: `./puzzles/${puzzle_id}`,
      data: {"array": array},
      dataType: "json"
    }).done(function(){
    }).fail(function(){
      alert("同期エラーが発生しました");
    });
  })

  function reloadData(){
    if (window.location.href.match(/\/rooms\/[0-9]+\/puzzles/)){
      $.ajax({
        url: "./api/puzzles",
        type: 'get',
        dataType: 'json',
      }).done(function(res) {
        set_table_data(res["data"].split(""));
      }).fail(function() {
        alert('データを取得できませんでした。');
      });
    }
  }
  setInterval(reloadData,10000);
  reloadData();
})