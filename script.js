let data =[
    {id: 1, name: "Luke", nickname: "LOOK" },
    {id: 2, name: "Loke", nickname: "LOOOK"}
]

function readAll(){
    localStorage.setItem("object",JSON.stringify(data));
    var tabledata = document.querySelector("#data_table");

    var object = localStorage.getItem('object');
    var objectdata = JSON.parse(object);
    var elements ="";

    objectdata.map(record => (
        elements += ` <tr>
        <td> ${record.name}</td>
        <td> ${record.nickname}</td>
        <td>
            <button class ="edit" onclick ={edit(${record.id})}>Edit</button>
            <button class ="delete" onclick = {delet(${record.id})}>Delete</button>
        </td>
    </tr>`
    ))

    tabledata.innerHTML = elements;
}

function create(){
    document.querySelector("#create-Form").style.display = "block";
    document.querySelector("#button").style.display = "none";
}

function add(){
    
    var name = document.querySelector(".name").value;
    var nickname = document.querySelector(".nickname").value;

    var newObj = {id: 3, name: name, nickname: nickname};
    data.push(newObj);

    document.querySelector("#create-Form").style.display = "none";
    document.querySelector("#button").style.display = "block";

    readAll()
}

function edit(id){
    document.querySelector("#update-Form").style.display = "block";
    document.querySelector("#button").style.display = "none";
    
    var obj = data.find(rec => rec.id === id);

    document.querySelector("#uName").value = obj.name;
    document.querySelector("#uNickname").value = obj.nickname;
    document.querySelector(".id").value = obj.id;

}

function update(){
    var id = parseInt(document.querySelector(".id").value);
    var name = document.querySelector("#uName").value;
    var nickname = document.querySelector("#uNickname").value;

   

    var index = data.findIndex(rec => rec.id == id);
    data[index] = {id, name ,nickname};

    document.querySelector("#update-Form").style.display = "none";

    readAll();

}

function delet(id){
    data = data.filter(rec => rec.id !== id);
    readAll();
}

