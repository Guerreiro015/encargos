let key = 'item 1';
localStorage.setItem(key, 'value');

//Leia as entradas com localStorage.getItem():
let myItem = localStorage.getItem(key);
console.log(key)

//Atualize uma entrada com o mesmo método setItem(),
 //mas com uma chave já existente:
 localStorage.setItem(key, 'new value');

 //Exclua uma entrada com o método removeItem()
 //----localStorage.removeItem(key);
 //Limpe tudo o que é armazenado no localStorage com clear():
 //----localStorage.clear();

 //Armazenamento de objetos JSON
 // Criar item:
let myObj = { name: 'Gabriel', age: 25 };
localStorage.setItem(key, JSON.stringify(myObj));

// Ler item:
let myyItem = JSON.parse(localStorage.getItem(key));
console.log(myyItem)


if (localStorage.length > 0) {
    for (let i = 0; i < localStorage.length; i++) {
        let key = localStorage.key(i);
        let value = localStorage.getItem(key);
        console.log(key, value);
    }
} else {
    console.log('Não há itens')
}