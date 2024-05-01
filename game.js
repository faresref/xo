
let turn = 'x';
let title = document.querySelector('.title');
//let squares = [];
function end (num1,num2,num3) {
    title.innerHTML = `${squares[num1]} winner`;
    document.getElementById('item' + num1).style.background = '#000';
    document.getElementById('iten' + num2).style.background = '#000';
    document.getElementById('item' + num3).style.background = '#000';
    setInterval(function(){title.innerHTML += '.'},1000);
    setTimeout(function(){location.reload()},4000);
}
function game(id)
{
let element  = document.getElementById(id);
if(turn === 'x' &&  element.innerHTML == '')
{
    element.innerHTML = 'x';
    turn = 'o';
    title.innerHTML = 'o';
}
else if (turn === 'o' && element.innerHTML == '' )
{
    turn = 'x';
    title.innerHTML = 'x';
    element.innerHTML = 'o';
}
winner();

}
function winner (){
    for(let i=1 ; i<10 ; i++){
        squares[i] = getElementById('item' + i).innerHTML
    }
    //let squares1  = document.getElementById(item1).innerHTML;
    //let squares2  = document.getElementById(item2).innerHTML;
    //let squares3  = document.getElementById(item3).innerHTML;
    //let squares4  = document.getElementById(item4).innerHTML;
    //let squares5  = document.getElementById(item5).innerHTML;
   // let squares6 = document.getElementById(item6).innerHTML;
   // let squares7  = document.getElementById(item7).innerHTML;
   // let squares8  = document.getElementById(item8).innerHTML;
   // let squares9 = document.getElementById(item9).innerHTML;
   //document.getElementById('item1').innerHTML = '#000';
   //console.log('bilal x o');
//console.log(screen.height)
//console.log(screen.width)
    if (squares[1] == squares[2] && squares[2] == squares[3] && squares[3] != ''){
        end(1,2,3);
        alert('siiiiiiiir')
}
    else if (squares[4] == squares[5] && squares[5] == squares[6] && squares[6] != ''){
        end(4,5,6);
}
else if (squares[7] == squares[8] && squares[8] == squares[9] && squares[9] != ''){
        end(7,8,9);
}
else  if (squares[1] == squares[4] && squares[4] == squares[7] && squares[7] != ''){
        end(1,4,7);
}
else if (squares[2] == squares[5] && squares[5] == squares[8] && squares[8] != ''){
        end(2,5,8);
}
else  if (squares[3] == squares[6] && squares[6] == squares[9] && squares[9] != ''){
        end(3,6,9)
}
else if (squares[1] == squares[5] && squares[5] == squares[9] && squares[9] != ''){
        end(1,5,9)
}
else  if (squares[3] == squares[5] && squares[5] == squares[7] && squares[3] != ''){
        end(3,5,7)
}
}

/////////////////////////////////////////////////////////////////////////////////////
 let btnadd = document.querySelector('.btnadd')
 //btnadd.addEventListener('keydown' , (ev) => {if(ev.key == "b"){console.log("kilokilop")}})
 btnadd.onclick = function addkey(){
     var input = document.querySelector('.input');
     
     if(
         
         input.value == '')
         {
             let WARNING = document.getElementById('WARNING');
             //let container2 = document.querySelector('.container2');
             let titledata = document.querySelector('.titledata');
           // let div = document.createElement(div);
             //document.createElement(p);
             titledata.innerHTML += `
             <div class="tah"><P>⚠"Please Entrer a tasks"</P></div>
             
             
             
             
             
             
             `
             //div.appendChild('p')
            
             //input.Placeholder = '"Please Entrer a tasks"';
             //input.style.color = 'red';
             //container2.innerHTML += 
             WARNING.classList.remove('rola');
             //console.log('jnckjfb')
             //alert("pleaseeeeee siiiiir suuuiiiiiiiiii");
             // setTimeout(function(){location.reload()  
             // },1000 );
             
            }
            else 
            {

                WARNING.classList.add('rola');

               // let titledata = document.querySelector('.titledata');

               // titledata.innerHTML = ` <input class="input" type="text" placeholder="task to be done...">
        
                //<button class='btnadd' onkeydown="">Add</button>`
                
                
                
                
                
                
                
                let tasks = document.getElementById('tasks')
                tasks.innerHTML += `
                
                <div class="mahama">
                <button onclick="ma3(this)" class="ib" ><i class="fa-solid fa-calendar-check"></i>
                </button>
                
                <span  class="mahamaname"> ${input.value}</span>
                <botton onclick="penk(this)" class="pen"><i class="fa-solid fa-pen-to-square"></i></botton>
                <botton  onclick="tele(this)" class="lok"><i class="fa-solid fa-trash-can">
                </i></botton>
                <div>
                
                `;
                input.value = '';
                //let tit = document.querySelector('.titledata');
                //tasks.innerHTML += `<i class="fa-sharp fa-regular fa-square-check"></i>`
                //per.onclick = function(){
                    
                    
                    // }
                }
                //<i class="fa-solid fa-square-check" style="color: #1bbb3b;"></i>    
                //for (let o=0;o<6;o++){
                    //for (let i=0 ; i<lok.length ; i++ ){
                        // ib.onclick = 
                        //}
                        
                    }
                    // let delet = Document.querySelector(".lok");
                    // let lok = document.querySelector(".lok");
                    function tele(fatiha){
                        fatiha.parentElement.remove()
                        //  ib.classList.toggle('bch')
                        //let mahama = document.querySelector(".mahama");
                        // mahama.classList.add('rola')
                        //alert('jjhjkkjfd')
                        //tasks.innerHTML = '';
                        // mahama.innerHTML = '';
                    } 
                    /// /l//et mahama = Document.querySelector(".mahama");
                    function ma3(kahdija){
                       //let ib = document.querySelector(".ib");
                     // let mahamaname = document.querySelector(".mahamaname");
                         
                         kahdija.classList.toggle('bch') ;
                         kahdija.nextElementSibling.classList.toggle('mmm');
                        // console.log('5555555')
                         }
                         
                   function penk(ZOBIDA){
                   const penk = ZOBIDA.previousElementSibling.innerText
                    ZOBIDA.previousElementSibling.innerHTML = `   
                    <input class="inputpen" type="text" onblur='now(this)' value="${penk}" />

                    `
                 // let btnpen =ZOBIDA.i   
                  //document.querySelector('.pen')
                 // ZOBIDA.children.remove()
                  //ZOBIDA.innerHTML = ` <i class="fa-solid fa-square-check" style="color: #1bbb3b;"></i>`
                  //ZOBIDA.classList.remove('pen')
                 // ZOBIDA.classList.add('pink')
               //   ZOBIDA.onclick = "now(this)" 

                         }
                       function  now(target){
                           alert("please siiiiir t9awd")
                        target.parentElement.innerHTML = `
                        <span  class="mahamaname"> ${target.value}</span>
                        `
                       // ZOBIDA.innerHTML =

                       }
                    ///delet.onclick = function(){
                // mahama.remove();
            
            
            //document.createElement('top');
            //let top = document.appendChild('top');
            //top.innerHTML = input.value
            
            
        //}
        //}
//<i class="fa-solid fa-square-check" style="color: #1bbb3b;"></i>
//<i class="fa-solid fa-check-double"></i>
//<i class="fa-solid fa-check-double" style="color: #005eff;"></i>
//<i class="fa-sharp fa-regular fa-square-check"></i>
//<i class="fa-solid fa-calendar-check"></i>
//<i class="fa-solid fa-calendar-check" style="color: #1ec859;"></i>