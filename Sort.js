// This is similar to time.sleep() in python so it cannot be used with Charts

function sleep(milliseconds) { 
    let timeStart = new Date().getTime(); 
    while (true) { 
      let elapsedTime = new Date().getTime() - timeStart; 
      if (elapsedTime > milliseconds) { 
        break;
      } 
    } 
  } 


  function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }

////////////////////// To Delete any Element in HTML

function clearBox(elementID)
{
    document.getElementById(elementID).innerHTML = "";
}

////////////////
function getRandomColor() {
    var letters = '0123456789ABCDEF'.split('');
    var color = '#';
    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

var bar_colour=[]
var border_colour=[]
/// GET RANDOM COL IN RGB

function Rgb(opacity) {
    var r = Math.floor(Math.random() * 255);
    var g = Math.floor(Math.random() * 255);
    var b = Math.floor(Math.random() * 255);
    return "rgb(" + r + "," + g + "," + b + ","+ opacity + ")";
}

/////////////////////////   FOOTER GRAPHS
var COUNT=0;

function Sort2(x,y){



    var foot=document.getElementById('footer1');
    var DIV=document.createElement('div');
    DIV.id='div_footer'+COUNT;
    DIV.className='div_footer';
    var DI='div_footer'+COUNT;
    foot.appendChild(DIV);

    // document.getElementById(DI).style.height="100px !importent";
    var get_div=document.getElementById(DI);

    var CA=document.createElement('canvas');
    CA.className='can_footer';
    CA.id='can_footer'+COUNT;
    var v='can_footer'+COUNT;

    get_div.appendChild(CA);

    // document.getElementById(v).style.height="100px !importent" ;
    // document.getElementById(v).style.width="330px" ;

    var ctx2 = document.getElementById(v).getContext('2d');

    myChart2 = new Chart(ctx2, {

        type: 'bar',
        data: {
            labels: x,// ["red", "blue", "green", "blue", "red", "blue"]

            datasets: [{
                
                
                label: 'Pass '+COUNT,
                data: y,//[12, 19, 3, 5, 2, 3],
                
                 backgroundColor: bar_colour
                        
                
                ,
                 borderColor:border_colour,

                borderWidth: 1
            }]
        },
        options: {
           
            responsive: true,
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            },
            tooltips: {
                enabled: false
              }
        }
    });

}
///////////////////////

var myChart;

function Sort(x,y){

    
    var ctx = document.getElementById('can_left').getContext('2d');
    myChart = new Chart(ctx, {

        type: 'bar',
        data: {
            labels: x,

            datasets: [{
                
                
                label: '# of Votes',
                data: y,
                
                backgroundColor: bar_colour
                ,
                borderColor: border_colour,
                borderWidth: 1
            }]
        },
        options: {
            
            maintainAspectRatio:false,
            responsive: true,
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            },
            tooltips: {
                enabled: false
              }

        }
    });

}



// This completelly Self Changes



function SELECTION(inputArr){

    
    let n = inputArr.length;
    var i=0;


    var v=setInterval(function(){
        if(i>=n){
            clearInterval(v);
        }

        let min = i;
      
        myChart.data.datasets[0].backgroundColor[i]='rgba(0,0,132, 1)';
        
       
        console.log('**OUT**');
        for(let j = i+1; j < n; j++){

            if(inputArr[j] < inputArr[min]) {
                min=j;
            }

        }

        if (min != i) {

             let tmp = inputArr[i]; 
             inputArr[i] = inputArr[min];
             inputArr[min] = tmp;   

        }
        console.log('OUR ARR :',inputArr);
        Sort2(inputArr,inputArr);
        COUNT=COUNT+1;

        var temp=myChart.data.datasets[0].backgroundColor[min];
        myChart.data.datasets[0].backgroundColor[min]='rgba(0,0,132, 1)';
        
        myChart2.data.datasets[0].backgroundColor[min]='rgba(0,0,132, 1)';

        
        myChart.update();
    
        myChart2.update();
        
        console.log('MIN : ',min);
        
        myChart.data.labels=inputArr;
        myChart.data.datasets[0].data=inputArr;
        
        
        myChart2.data.datasets[0].backgroundColor[min]=temp;
        
        
        myChart.data.datasets[0].backgroundColor[i]='rgba(255, 99, 132, 0.2)';
        
        myChart.data.datasets[0].backgroundColor[min]=temp;
        myChart.data.datasets[0].backgroundColor[i]='rgba(255, 99, 132, 0.2)';
    
        i=i+1;
    
    },1000);

    Sort(inputArr,inputArr);

}




function Generate_Array(){

    var Arr=[];

    for(var i=0;i<10;i++){
        Arr.push(randomNumber(5,50));
    }

    return Arr;
}


function Sel_sort(V=2){

    
   
    if(V==2){

        clearBox('footer1');
        clearBox('can_left');
        console.log('ENETETETETE : ');
        var inp_arr=document.getElementById('input_array').value;
        inp_arr=inp_arr.split(',').map(Number);
        document.getElementById('input_array').value='';
        console.log('VALUE OD ARR 1 : ',inp_arr);

    }

    else{

        clearBox('footer1');
        clearBox('can_left');
        inp_arr=Generate_Array();
    }


    if(inp_arr[0]!='' && !inp_arr.some(isNaN)){
        console.log('awdqwi : ');
    
    try{
        console.log('VALUE OD ARR 2 : ',inp_arr);
        COUNT=0;
        bar_colour=[];
        border_colour=[];

        for(var ii=0;ii<inp_arr.length;ii++){
            bar_colour.push(Rgb(0.3));
            border_colour.push(Rgb(1));
        }

        Sort(inp_arr,inp_arr);
        SELECTION(inp_arr);    
        Time_Compx();

        document.getElementById('input_array').placevalue='Enter Your Array ';
        
    }
    catch(err){
        console.log('CATCH');
        document.getElementById('input_array').placevalue='Please enter Correctlly !!';
    }
    }
    else{
        console.log('In console')
        document.getElementById('input_array').placeholder='Please enter Correctlly !!';
    }

}


// This Function can help in COMPARING SPEED OF DIFFERENT ALGORITIUMNS

function ARRA(arr,Length){

    console.log(arr);
    c=0;
    var main_len=arr.length/Length;
    var initial=0;
    var End=initial+Length;

    
    Sort(arr.slice(initial,Length),arr.slice(initial,Length));

    var v=setInterval(function(){

        c=c+1;
        if(c>=main_len-1){
            clearInterval(v);
        }
        initial=End;
        End=initial+Length;
        console.log('C is : ',c,initial,End);
        

        var DATA=arr.slice(initial,End);
        myChart.data.labels=DATA;
        myChart.data.datasets[0].data=DATA;
        
        myChart.update();

        
        
    },100);


}




function Time_Compx(){

    console.log("*&^*&%%&%^&");
    var X=[0,2,4,6,8,10,12,14,16,18,20];
    var Y1=[];
    var Y2=[];
    var Y3=[];
    var Y4=[];

    for (var i=0;i<X.length;i++){
        Y1.push(X[i]);
        Y2.push(X[i]**2);
        //Y3.push(X[i]**3);
        Y3.push(Math.log10(X[i]));
    }

    var ctx3 = document.getElementById('can_right').getContext('2d');
    curves=new Chart(ctx3,{
        type:'line',
        data:{
            labels:X,
            datasets:[{
                pointHoverBorderWidth:'10px',
                pointHoverRadius:'5px',
                backgroundColour:'red',
                data:Y1
            },
        {
            data:Y2
        },{
            data:Y3
        },
    {
        //data:Y4
    }]
        },
        options: {
            
            maintainAspectRatio:false,
            responsive: true,
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            },
            tooltips: {
                enabled: false
              }

        }
    })


    console.log(Y1,Y2,Y3,Y4);
}
