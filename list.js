var form= document.getElementById('form1');
var itemList = document.getElementById('items');
var filter = document.getElementById('Filter')

form.addEventListener('submit',additem)
itemList.addEventListener('click', Remove);
 function additem(e){
    e.preventDefault();
    console.log(2);
    var newItem = document.getElementById('item').value;
    console.log(newItem);
    var li = document.createElement('li');
    li.className= 'list-group-item'
    li.appendChild(document.createTextNode(newItem))
     var delbutten = document.createElement('button');
     
     delbutten.className= 'btn btn-danger btn-sm float-sm-end flex-sm-nowrap delete'
     delbutten.appendChild(document.createTextNode(`X`));
     li.appendChild(delbutten);
    
    itemList.appendChild(li);

    

 }
 function Remove(e){
   if(e.target.classList.contains('delete')){
      console.log(4)
      var li= e.target.parentElement;
      itemList.removeChild(li);
   }
 }