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





function getRandomColor() {
    var letters = '0123456789ABCDEF'.split('');
    var color = '#';
    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}


console.log(getRandomColor());

var myChart;
function Sort(x,y){

 
    var al=[];
    for(var ii=0;ii<x.length;ii++){
        al.push(getRandomColor());
    }

    console.log(al);

    var ctx = document.getElementById('Can').getContext('2d');
    myChart = new Chart(ctx, {

        type: 'bar',
        data: {
            labels: x,// ["red", "blue", "green", "blue", "red"]

            datasets: [{
                
                
                label: '# of Votes',
                data: y,//[12, 19, 3, 5, 2, 3],
                
                backgroundColor: [

                     'rgba(255, 99, 132, 0.2)',
                     'rgba(54, 162, 235, 0.2)',
                     'rgba(255, 206, 86, 0.2)',
                     'rgba(75, 192, 192, 0.2)',
                     'rgba(153, 102, 255, 0.2)',
                     'rgba(255, 159, 64, 0.2)',
                     'rgba(25, 109, 64, 0.2)',
                     'rgba(255, 99, 64, 0.2)',
                     'rgba(55, 109, 84, 0.2)',
                     'rgba(255, 9, 64, 0.2)',
                     'rgba(205, 159, 64, 0.2)',
                     'rgba(250, 159, 60, 0.2)',
                 ]
                ,
                borderColor: [

                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'

                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        }
    });

}

lis1=[];


// This completelly Self Changes

var d1={};

function SELECTION(inputArr){

    lis1=[]
    let n = inputArr.length;
    var cou=0;

    var i=0;


    var v=setInterval(function(){

       

        if(i>=n){
            clearInterval(v);
        }

        let min = i;
       //5 var min2=min;
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

        var temp=myChart.data.datasets[0].backgroundColor[min];
        myChart.data.datasets[0].backgroundColor[min]='rgba(0,0,132, 1)';
        console.log('**OUT**');
        myChart.update();
        //myChart.data.labels=inputArr;
        //myChart.data.datasets[0].data=inputArr;
        //var temp2=myChart.data.datasets[0].borderColor[i];
        console.log('MIN : ',min);
        
        myChart.data.labels=inputArr;
        myChart.data.datasets[0].data=inputArr;
        
        //myChart.update();
        myChart.data.datasets[0].backgroundColor[min]=temp;
        myChart.data.datasets[0].backgroundColor[i]='rgba(255, 99, 132, 0.2)';
        
        
        //myChart.data.datasets[0].backgroundColor[i]=temp2;
        d1[i]=inputArr;
        i=i+1;
    
    },100);



}


function Sel_sort(){

    let inp_arr=[10,9,35,43,76,21,54,21,34,75,67,3];
    Sort(inp_arr,inp_arr);
    
    SELECTION(inp_arr);
    console.log(d1);
    //Time_Compx();
 

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

        
        
    },500);


}




function Time_Compx(){

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

    var ctx = document.getElementById('graph').getContext('2d');
    curves=new Chart(ctx,{
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
        }
    })


    console.log(Y1,Y2,Y3,Y4);
}
//Time_Compx();