namespace segundoParcial{

    window.addEventListener("load", function(){
        document.getElementById("btnAgregar").addEventListener("click", agregar);
        //document.getElementById("btnEliminar").addEventListener("click", eliminar);
        document.getElementById("btnLimpiar").addEventListener("click", borrarTabla);
        document.getElementById("btnPromedio").addEventListener("click", sacarPromedio);
        document.getElementById("idCheck").addEventListener("change", camposMostrados);
        document.getElementById("nombreCheck").addEventListener("change", camposMostrados);
        document.getElementById("apellidoCheck").addEventListener("change", camposMostrados);
        document.getElementById("edadCheck").addEventListener("change", camposMostrados);

    });


    var arrayPersonas:Array<Cliente> = new Array<Cliente>();


    export function agregar(){
        var nombre = (<HTMLInputElement>document.getElementById("inputNombre")).value;
        var apellido = (<HTMLInputElement>document.getElementById("inputApellido")).value;
        var edad = parseInt((<HTMLInputElement>document.getElementById("inputEdad")).value);
        var sexoSelect = (<HTMLInputElement>document.getElementById("comboSexo")).value;
        var sexo;

        if(sexoSelect == "Femenino"){
            sexo = "Femenino";
        }else{
            sexo = "Masculino";
        }

        var listaIds:Array<number> = arrayPersonas.map(x => x.getId());
        var idMax:number = listaIds.reduce(function(previous, current){
                if(previous < current){
                    previous = current + 1;
                    return previous;
                }
                else{
                    return previous + 1;
                }
                
        }, 1);

        var unCliente = new Cliente(idMax, nombre, apellido, edad, sexo);
        arrayPersonas.push(unCliente);

        agregarItem(unCliente.getId().toString(), unCliente.getNombre(), unCliente.getApellido(), unCliente.getEdad().toString(), unCliente.getSexo().toString());

        (<HTMLInputElement>document.getElementById("inputNombre")).value = "";
        (<HTMLInputElement>document.getElementById("inputApellido")).value = "";
        (<HTMLInputElement>document.getElementById("inputEdad")).value = "";
        (<HTMLInputElement>document.getElementById("comboSexo")).value = "Femenino";

    }

    export function agregarItem(id:string, nombre:string, apellido:string, edad:string, sexo:string)
    {
        var cuerpo = document.getElementById("tCuerpo");
        var row = document.createElement("tr");
        var td = document.createElement("td");
        td.setAttribute("name", "idTabla");
        var tdText = document.createTextNode(id);
        td.appendChild(tdText);
        row.appendChild(td);

        var td2 = document.createElement("td");
        td2.setAttribute("name", "nombreTabla");
        var tdText2 = document.createTextNode(nombre);
        td2.appendChild(tdText2);
        row.appendChild(td2);

        var td3 = document.createElement("td");
        td3.setAttribute("name", "apellidoTabla");
        var tdText3 = document.createTextNode(apellido);
        td3.appendChild(tdText3);
        row.appendChild(td3);

        var td4 = document.createElement("td");
        td4.setAttribute("name", "edadTabla");
        var tdText4 = document.createTextNode(edad);
        td4.appendChild(tdText4);
        row.appendChild(td4);

        var td5 = document.createElement("td");
        td5.setAttribute("name", "sexoTabla");
        var tdText5 = document.createTextNode(sexo);
        td5.appendChild(tdText5);
        row.appendChild(td5);

        //row.addEventListener("click", completarCampos);
        
        cuerpo.appendChild(row);
    }


    /*export function completarCampos(e)
    {
       
        var tr = e.target.parentNode.parentNode;
        (<HTMLInputElement>document.getElementById("inputId")).value = tr.childNodes[0].textContent;
        (<HTMLInputElement>document.getElementById("inputNombre")).value = tr.childNodes[1].textContent;
        (<HTMLInputElement>document.getElementById("inputApellido")).value = tr.childNodes[2].textContent;
        (<HTMLInputElement>document.getElementById("inputEdad")).value = tr.childNodes[3].textContent;
        (<HTMLInputElement>document.getElementById("inputSexo")).value = tr.childNodes[4].textContent;
        var id =  parseInt(tr.childNodes[0].textContent);
        
        if(eliminar(id)== true)
        {
            tr.remove();
        }
     
    }

    export function eliminar(id:number)
    {
        
            
        if((<HTMLInputElement>document.getElementById("inputId")).value != "" && (<HTMLInputElement>document.getElementById("inputNombre")).value != "" &&
        (<HTMLInputElement>document.getElementById("inputApellido")).value != "" &&  (<HTMLInputElement>document.getElementById("inputEdad")).value != "")
        {
            var persona;
            for(var i =0; i<arrayPersonas.length; i++)
            {
                if(arrayPersonas[i].getId() == id)
                {
                    persona = arrayPersonas[i];
                }
            }
            var indice = arrayPersonas.indexOf(persona);
            arrayPersonas.splice(indice, 1);

            return true;
        }
        
    }*/

    export function borrarTabla()
    {
        var tCuerpo = document.getElementById("tCuerpo");
        tCuerpo.innerHTML = "";
    }

    export function sacarPromedio()
    {
        var listaPrecios:Array<number> = arrayPersonas.map(function(item){
            return item.getEdad();
        });
        var promedio = listaPrecios.reduce(function(total, num){
            total += num;
            return total;
        }, 0);

        var promTotal:string = (promedio/listaPrecios.length).toString();

        (<HTMLInputElement>document.getElementById("promedio")).value = promTotal;

    }

    export function camposMostrados()
    {
        var id = (<HTMLInputElement>document.getElementById("idCheck"));
        var nombre = (<HTMLInputElement>document.getElementById("nombreCheck"));
        var apellido = (<HTMLInputElement>document.getElementById("apellidoCheck"));
        var edad = (<HTMLInputElement>document.getElementById("edadCheck"));

        if(id.checked)
        {
            var tablaIds = document.getElementsByName("idTabla");
            tablaIds.forEach( function(item){
                item.hidden = false;
            });
        }
        else{
             var tablaIds =document.getElementsByName("idTabla");
             tablaIds.forEach(function(item){
                 item.hidden = true;
             });
        }

        if(nombre.checked)
        {
            var tablaNombres = document.getElementsByName("nombreTabla");
            tablaNombres.forEach( function(item){
                item.hidden = false;
            });
        }
        else{
             var tablaNombres =document.getElementsByName("nombreTabla");
             tablaNombres.forEach(function(item){
                 item.hidden = true;
             });
        }

        if(apellido.checked)
        {
            var tablaApellidos = document.getElementsByName("apellidoTabla");
            tablaApellidos.forEach( function(item){
                item.hidden = false;
            });
        }
        else{
             var tablaApellidos =document.getElementsByName("apellidoTabla");
             tablaApellidos.forEach(function(item){
                 item.hidden = true;
             });
        }

        if(edad.checked)
        {
            var tablaEdades = document.getElementsByName("edadTabla");
            tablaEdades.forEach( function(item){
                item.hidden = false;
            });
        }
        else{
             var tablaEdades =document.getElementsByName("edadTabla");
             tablaEdades.forEach(function(item){
                 item.hidden = true;
             });
        }

    }

        



}