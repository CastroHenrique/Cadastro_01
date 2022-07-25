let fa = [
    { path:"php/data.csv", head: "Formulário" },
]
for(let i = 0; i < fa.length; i++) {
    document.querySelector("body").innerHTML
    +=`
    <table id="table${i}">
    <thead>
    <tr>
    <th colspan="3">${fa[i].head}</th>
    </tr>
    </thead>
    <tbody id="tbody${i}"><tbody>
    </table>
    `;
    fetch(fa[i].path)
        .then(res=> res.text())
        .then(data=>{
            let result = data.split(/\r?\n|\r/)
            .map(e=>{
                return e.split(",")
                .map(td=>td!==""?`<td>${td}</td>`:"")
                .join("")
                .split("\n")
                .map(tr=>tr!==""?`<tr>${tr}</tr>`:"")
                .join("")
            })
            document.querySelector(`#tbody${i}`).innerHTML=result.join("");
           // console.log(result);
        })
    
}