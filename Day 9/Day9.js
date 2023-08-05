let data = [
    { name: 'manas', age: 19 },
    { name: 'gopal', age: 21 },
    { name: 'ramu', age: 45 },
    { name: 'raman', age: 28 },
    { name: 'jiman', age: 13 },
    { name: 'ranga', age: 50 },
    { name: 'pawan', age: 42 },
    { name: 'omkar', age: 25 }
  ];
  let createTable = function (arr) {
  
    // let btn = document.querySelector('button');
    let div = document.querySelector('.container');
    let table = document.createElement('table');
    table.classList.add('table');
    let thead = document.createElement('thead');
    let trHead = document.createElement('tr');
    for (let key in arr[0]) {
      let th = document.createElement('th');
      th.innerHTML = `${key}`;
      trHead.appendChild(th);
    }
    thead.appendChild(trHead);
    table.appendChild(thead);
  
    let tbody = document.createElement('tbody');
    for (let i = 0; i < arr.length; i++) {
      let tr = document.createElement('tr');
      for (let key in arr[i]) {
        let td = document.createElement('td');
        td.innerHTML = `${arr[i][key]}`;
        tr.appendChild(td);
      }
      tbody.appendChild(tr);
    }
    table.appendChild(tbody);
  
    div.innerHTML = ''; 
    div.appendChild(table);
  }
  createTable(data);
  
  const zeroToTwenty = function(arr){
    const container = document.querySelector('.container');
    container.innerHTML = '';
  
    let a = [];
    for(let i=0;i<arr.length;i++){
      if (arr[i].age<=20) {
        a.push(arr[i]);
      }
    }
    return createTable(a);
  }
  
  
  const between = function(arr){
    const container = document.querySelector('.container');
    container.innerHTML = '';
  
    let a = [];
    for(let i=0;i<arr.length;i++){
      if(arr[i].age>20 && arr[i].age<=30){
        a.push(arr[i]);
      }
    }
    return createTable(a);
  }
  
  const above30 = function(arr){
    const container = document.querySelector('.container');
    container.innerHTML = '';
  
    let a = [];
    for(let i=0;i<arr.length;i++){
      if(arr[i].age>=30 && arr[i].age<=50){
        a.push(arr[i]);
      }
    }
    return createTable(a);
  }