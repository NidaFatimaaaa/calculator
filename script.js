let display = document.getElementById("display"); 

function addToDisplay(value) 
{
    display.value += value;
}

function clearDisplay() 
{
    display.value = "";
}

function calculate() 
{
    if(display.value === "") 
    {
        display.value = "Enter a calculation";
    }
    else
    {
        try
        {
            let result = eval(display.value);

         if(result === Infinity || result === -Infinity)
            {
                display.value = "Cannot divide by 0";
            } 
            else
            {
              display.value = result;
           }
        } 
     catch
        {
            display.value = "Error";
        }     
    } 
}

function backspace()
{
    display.value = display.value.slice(0, -1);
}

function toggleSign()
{
    if(display.value !== "")
    {
        display.value = eval(display.value * -1);
    } 
}