var inputName= document.getElementById("name")
var inputprice= document.getElementById("price")
var inputGatogry= document.getElementById("cat")
var inputDescription= document.getElementById("des")
 var btnAdd = document.getElementById("btnadd")
 var search=document.getElementById("search")
 var tbody= document.getElementById("tbody")
 var curentindex;
 var arryproduct=[]
if(localStorage.getItem("products")!=null){
    arryproduct= JSON.parse(localStorage.getItem("products"))
      displayData(arryproduct);
}
else{
    arryproduct=[];
}

 
function getdata() {
    
    if(btnAdd.innerHTML.trim() == "Add product") {
        if(testName()){
            getaddData();
        }
       else{
       }

    }
    else{

        if(testName()){
            getUpdateData() ;
        }
       else{
       }

    }
}
function getaddData() {
    var product={
        name:inputName.value,
        pric:inputprice.value,
        Gat:inputGatogry.value,
        des:inputDescription.value
    }
arryproduct.push(product)
console.log(arryproduct)
;
localStorage.setItem("products",JSON.stringify(arryproduct))
displayData(arryproduct)
clearinput() 
}

function getUpdateData() {
    var product={
        name:inputName.value,
        pric:inputprice.value,
        Gat:inputGatogry.value,
        des:inputDescription.value
    }
    arryproduct[curentindex]=product
    localStorage.setItem("products",JSON.stringify(arryproduct))
    displayData(arryproduct)
    btnAdd.innerHTML=" Add product"
    clearinput()

}


function clearinput() {
    inputName.value=""
    inputprice.value=""
        inputGatogry.value=""
    inputDescription.value=""
}
// ////////////////////////////////////////////////////////////////////////
// function displaydata
function displayData(arry) {
    var cartona ="";
    for (var i = 0; i <arry.length; i++) {
        cartona+=`
         <tr>
                    <td>${i+1}</td>
                    <td>${arry[i].name}</td>
                    <td>${arry[i].pric}</td>
                    <td>${arry[i].Gat}</td>
                    <td>${arry[i].des}</td>
                    <td>
                        <button class=" p-2 update " onclick=" fillinput(${i})">Update</button>
                        <button class=" p-2 delet ms-3" onclick="deletproduct(${i})">Delete</button>
                    </td>
                </tr>
        `
        
    
    }
tbody.innerHTML=cartona
}
// /////////////////////////////////////////////////////////////////////////////////////////////////////
// function delete data

function deletproduct(index) {
    arryproduct.splice(index,1)
    localStorage.setItem("products",JSON.stringify(arryproduct))
 ,k,   displayData(arryproduct);
    
}
// ////////////////////////////////////////////////////////////////////////////////////////////////////////////
// function update data

function fillinput(index) {
    curentindex=index;
    inputName.value=arryproduct[index].name
        inputprice.value=arryproduct[index].pric
        inputGatogry.value=arryproduct[index].Gat
        inputDescription.value=arryproduct[index].des
btnAdd.innerHTML="update product"
}


// /////////////////////////////////////////////////////////////////////
// function search

function searchinput(term) {
    var newarry=[]
    for (var i= 0; i<arryproduct.length; i++) {
       if (arryproduct[i].name.toLowerCase().includes(term.toLowerCase())){
        newarry.push(arryproduct[i])
        displayData(newarry)

       }

    }

    
}
//TEST REGEX

function testName() {
    var regx = /^[A-Z]{1}[a-z]{3,8}$/
    if(regx.test(inputName.value)){
inputName.classList.add("is-valid")
inputName.classList.remove("is-invalid")
return true;

    }
    else{
        
inputName.classList.add("is-invalid")
inputName.classList.remove("is-valid")
return false;


    }
}