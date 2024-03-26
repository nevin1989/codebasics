let fruits=["apple","orange","grape","mango","banana"]
for(let i=0; i<fruits.length; i++)
  {
    console.log(fruits[i]);
  }

for(x of fruits)
   {
     console.log(x);
   }

   fruits.forEach(element=> {
    console.log(element )
        });

        let person={
             name:"tiya",
             age: 10,
             place:"ekm"
        };
        for (x in person){
             console.log(person[x]);

        }
        let j=0;
        while(j<5)
        { console.log(j+1)
           j++;     
        }
        
        let k=0;
        while(k<=fruits.length)
         {
            console.log(fruits[k]);
          k++;
         }
        
         // do while
         let p=1;
         do{ 
             console.log(p);
             p++;

         } while(p<=5);
         