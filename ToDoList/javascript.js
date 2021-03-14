var form = document.getElementById("addForm");
var itemList = document.getElementById('items');
var filter = document.getElementById('filter')

//form submit
form.addEventListener('submit', addItem);
itemList.addEventListener('click', removeItem);
filter.addEventListener('keyup', filterItems);


function addItem(e){
  e.preventDefault();
  var novoItem = $('#item').val();
  
  //criar elemento li
  var li = document.createElement('li')
  //adiciona classe ao li criad
  li.className = 'list-group-item';
  console.log(li)
  //add texto node com o valor do input
  li.appendChild(document.createTextNode(novoItem))
  itemList.appendChild(li)
  //criar o botao delete
  var buttonDelete = document.createElement('button')
  buttonDelete.className = 'btn btn-danger btn-sm float-right delete';
  buttonDelete.appendChild(document.createTextNode('X'));
  li.appendChild(buttonDelete)
  // // //Jquery cria elemento li, adiciona a classe, adiciona o valor
  // var li = $('<li>').addClass("list-group-item").append(novoItem)
  // var btnDanger = $('<button>').addClass("btn btn-danger btn-sm float-right delete").append('X')
  // $(li).append(btnDanger)
  // //adiciona tudo a ul
  // $('#items').append(li)
  
}
function removeItem(e){
  if(e.target.classList.contains('delete')){
      if(confirm('Are You Sure?')){
      var li = e.target.parentElement;
      itemList.removeChild(li);
      }
  }
}
function filterItems(e){
  //coverter para lowercase
  var text = e.target.value.toLowerCase();
  var items = itemList.getElementsByTagName('li');
  //converter o HTMLCollection para array
  Array.from(items).forEach(function(item){
      var itemName = item.firstChild.textContent;
      //comparar o filtro com a lista
      if(itemName.toLowerCase().indexOf(text)!=-1){
          item.style.display ='block';
          
      }else{
               item.style.display ='none';
          }
  })

}

