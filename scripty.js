fetch('https://jsonplaceholder.typicode.com/users/2',
{
    method: 'get', //trazendo os dados
    headers: {
        'Accept': 'application/json',
    }
})

.then((res) => res.json())
.then((data)=>{
    console.log(data);
    document.getElementById('id-name-usuario').textContent = data.name;
    document.getElementById('id-rosto-usuario').src="/img/Diego01.jpg";
    document.getElementById('id-text-mensg-comp').value = data.company.catchPhrase;
    document.getElementById("id-text-endereco").textContent = data.address.street;
})