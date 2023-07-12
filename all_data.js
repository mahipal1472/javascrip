function allData(){
            
    table.innerHTML = ``
    
    contactList = JSON.parse(localStorage.getItem('listItem')) ?? []

    contactList.forEach((value, i)=>{
       
        var table = document.getElementById('table')

        table.innerHTML += `
            <tr>
            <td>${i+1}</td>
                <td>${value.name}</td>
                <td>${value.age}</td>

                <td>${value.phone}</td>
                <td>
                    <button  onclick="find(${value.id})">
                    edit</button>
                </td>
                <td>
                    <button onclick="removeData(${value.id})">
                    delete</button>
                </td>
            </tr>`
    })
}