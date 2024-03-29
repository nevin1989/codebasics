let ar=[1,2,3,4,1,5,6,4,2,5,1,5,6,7,8,2,2];
let count=0;
let num=0;
let un=0;
let max=0;
let hr=0;

for(var i=0;i<ar.length;i++)
    {
        for(var j=0;j<ar.length;j++)
          {
            if(ar[i]==ar[j])
               {
                 count=count+1;
                
               }
             else {
                    count=count+0;
                 }
          }
     
     if(count>max)
          {
            max=count;
            hr= ar[i];

          }
     else {
                 count=0;
                 
           }
           count=0;
    } 
    
    
     console.log("the element is",hr,"with count",max);
