var Garden = [
    {
        plnt_nm : 'Parsley';
        lst_wtrd : 'TODAY';
    }
    
    {
        plnt_nm : 'Coriander';
        lst_wtrd : 'TODAY';
    }
    
    {
        plnt_nm : 'Thyme';
        lst_wtrd : 'TODAY';
    }
    
    {
        plnt_nm : 'Basil';
        lst_wtrd : 'TODAY';
    }
    
    {
        plnt_nm : 'Cilantro';
        lst_wtrd : 'TODAY';
    }
    
    {
        plnt_nm : 'Sage';
        lst_wtrd : 'TODAY';
    }
    
    {
        plnt_nm : 'Mint';
        lst_wtrd : 'TODAY';
    }
    
    
    {
        plnt_nm : 'Oregano';
        lst_wtrd : 'TODAY';
    }
    

    
    
    ]
    
    
    
function addPlant() {
    var pnt_nem = $('#pnt_nem').val();
    var wtrd_dt = $('#wtrd_dt').val();
    
    // var div = document.createElement("div");
    
    var h2 = document.createElement("h2");
    var h2_text = document.createTextNode('pnt_nem');   //text entered from object list 
    h2.appendChild(h2_text);
    
    var para_m1 = document.createElement('p');
    var h2_text = document.createTextNode('Last Watered: ');   //text entered from object list
    para_m1.appendChild(h2_text);
    
    
    var para = document.createElement('p');
    var para_text = document.createTextNode(wtrd_dt)  // date entered from object list
    para.appendChild(para_text);
    
    
    document.getElementById("plant_div").appendChild(h2);
    document.getElementById("plant_div").appendChild(para_m1);
    document.getElementById("plant_div").appendChild(para);
    
    // localStorage.setItem(para_text, );
    
}


// var x = document.createElement("P");                        // Create a <p> node
// var t = document.createTextNode("This is a paragraph.");    // Create a text node
// x.appendChild(t);                                           // Append the text to <p>
// document.body.appendChild(h2);
// document.body.appendChild(para_m1);
// document.body.appendChild(para);


// $('#plant_div').odd(background-)