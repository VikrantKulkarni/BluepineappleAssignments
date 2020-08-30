





// .................................function for string  character occourance..........................................................
   
    function unique_char(str1)
    {
    var str=str1;
    var uniq="";
    for (var x=0;x < str.length;x++)
    {
        //aabcddd
    if(uniq.indexOf(str.charAt(x))==-1)
    {
    uniq += str[x];  
    //abcd
    }
    }
    return uniq;  
    }  
    
    function count_character(){
        console.log("char");
    var string1 = document.getElementById("string").value;
    
    string2 = string1.toLowerCase();
    console.log(string2);
    string1 = unique_char(string1.toLowerCase());


    console.log(string1);
//abcd
//aabcddd
    var result_string = [];
    
     for (var i = 0; i < string1.length; i++) 
     {
       var count = 0;
    
        for(var j=0; j< string2.length; j++)
        {
            if(string1[i] == string2[j])
            {                
                count++ ;
               
            }
         
                   
        }
         
        console.log("count of "+string1[i]+" is "+count);
        
        result_string.push(
            {
                char:string1[i],
                count:count
            }
        );
        
    }
    console.log(result_string);
    
    document.getElementById("string_count").innerHTML += "";
    var r="";
    for (let index = 0; index < r.length; index++) {
        r += r+"count of "+ result_string[index].char+" is "+result_string[index].count+"\n";
     
    }    
    console.log(r);

    document.getElementById("string_count").innerHTML = r;
    

    }


// ...........................................function to calculate perfect number...........................................................

    function perfect()
 {
 var temp = 0;
 var num=document.getElementsByName("number")[0].value;
    for(var i=1;i<=num/2;i++)
      {
          if(num%i == 0)
           {
             temp += i;
           }
      }
   
      if(temp == num && temp !== 0)
         {
        document.getElementsByName("output")[0].value=("It is a perfect number.");
         } 
      else
         {
        document.getElementsByName("output")[0].value=("It is not a perfect number.");
         }   

  } 
 


//..................................................function to calculate roman equivalent.............................................

 
function convertToRoman(num) 
{
    var num=document.getElementById("number").value;
    var decimalValue = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
    var romanNumeral = [
      "M",
      "CM",
      "D",
      "CD",
      "C",
      "XC",
      "L",
      "XL",
      "X",
      "IX",
      "V",
      "IV",
      "I"
    ];
  
    var romanized="";
  
    for (var index = 0; index < decimalValue.length; index++) {
      while (decimalValue[index] <= num) {
        romanized += romanNumeral[index];
        num -= decimalValue[index];
      }
    }
  
//     return romanized;
document.getElementById("roman").value=( romanized)   };

//   convertToRoman(33);
