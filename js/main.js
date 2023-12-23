

var store = []


if(localStorage.getItem("ourlocalStorage") != null)
{
   store= JSON.parse(localStorage.getItem("ourlocalStorage")) ;
    display() 
}


function addSite()
{
  
     var site ={
        siteName:document.getElementById("sName").value ,
        siteURL:document.getElementById("sURL").value,
    }

    
    store.push(site);
    claer()
    display() 

    localStorage.setItem( "ourlocalStorage" , JSON.stringify(store) )
   
}

function claer()
{
    document.getElementById("sName").value=null ;
    document.getElementById("sURL").value=null;
}


function display() 
{
    var tableRows = "";

    for (var i=0 ; i<store.length ; i++)
    {
  
        tableRows += `
        
        <tr>
            <td>${i+1}</td>
            <td>${store[i].siteName}</td>
            <td><a href="${store[i].siteURL}" target="_blank"><button class="btn btn-outline-primary"> <i class="fa-regular fa-eye"></i> Vist</button></a></td>
            <td><button onclick="Delete(${i})" class="btn btn-outline-primary"> <i class="fa-solid fa-trash-can"></i> Delete</button></td>
        </tr>
        
        `
    }


    document.getElementById("tbody").innerHTML=tableRows
}

function Delete(index)
{
    store.splice(index , 1)

    localStorage.setItem( "ourlocalStorage" , JSON.stringify(store) )

    display() 
}


