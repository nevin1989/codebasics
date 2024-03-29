let count=0;
function ifprime(ar)
     { for(let i=0;i<ar.length;i++)
            {
                 if(ar[i]==0||ar[i]==1)
                   {
                    console.log("special case");
                   }
                else{
                      for(let j=1;j<=ar[i];j++)
                          {
                            if(ar[i]%j==0)
                             {
                                count=count+1;
                              
                
                             }
                             else{
                                 count=count+0;
                                 }
                          }   
                          
                     } if(count>2)
                                {
                                  console.log("not a prime number",ar[i]);
                                }
                              else{
                                    console.log("prime number",ar[i]);
                                  }     
                 count=0;     
           }  
     }

     ifprime([29,2,3,4,6,7]);
