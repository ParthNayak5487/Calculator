// JavaScript Code
var storedValue; // Will Store First value that will be enter by user
var operation ='';  // Will Store Operation that will select by user
var output ;  // Will Store Result
var memory =0 ;  // Is used to store Memory Recall Value
var decimaladd = false; // Is usde to check that input have only one Dot(.)

$(document).ready(function() {
	
	// This Function is used to check the keypress function
	$("#output").keydown(function (e) {
    console.log(e.keyCode); //To check key code

		//For Enter key which will work for equals
		if(e.keyCode == 13)
		{
			var outputVal = $('#output').val();
			if(outputVal.length > 0)
			{
				outputVal = parseFloat(outputVal);
				outputVal = calculate(storedValue, outputVal, operation);
				$('#output').val(outputVal);
			}			
		}

		// Allow: backspace, delete, tab, escape, enter and .
        if ($.inArray(e.keyCode, [46, 8, 9, 27, 13, 110, 190]) !== -1 ||
             // Allow: Ctrl+A, Command+A
            (e.keyCode == 65 && ( e.ctrlKey === true || e.metaKey === true ) ) || 
             // Allow: home, end, left, right, down, up
            (e.keyCode >= 35 && e.keyCode <= 40)) {
                 // let it happen, don't do anything
                 return;


        }
		// Ensure that it is a number and stop the keypress
        if ((e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) && (e.keyCode < 96 || e.keyCode > 105)) {			
		  e.preventDefault();
        }

		// For operation keys
		if((e.keyCode == 187 || e.keyCode == 189 || e.keyCode == 186 || e.keyCode == 111 || e.keyCode == 67 || e.keyCode == 16 || e.keyCode == 107 || e.keyCode == 106  || e.keyCode == 109) || 
		(e.keyCode == 61 || e.keyCode == 173  ||  e.keyCode == 191))
		{	
			storedValue = $('#output').val().length>0 ? parseFloat($('#output').val()) : 0;
			$('#output').val('');			
			if(e.keyCode == 187 || e.keyCode == 107) // will check the keycode with the user press key.
			{
				operation = '+';
				decimaladd = false;
			}
			else if(e.keyCode == 189 || e.keyCode == 109)
			{
				operation = '-';
				decimaladd = false;
			}
			else if(e.keyCode == 106)
			{
				operation = '*';
				decimaladd = false;
			}
			else if(e.keyCode == 191 || e.keyCode == 111)
			{

			operation = '/';
			decimaladd = false;
			}
			
			// Will used to clear the value of all the store data
			else if(e.keyCode == 67)
			{
				$('#output').val('');
						outputVal = '';
						storedValue =0;
						operation = '';
						decimaladd = false;
			}
		}
		});
	
	// This Function is created to click event and will work according to button click
    $('button').click(function(){
		var btnId = this.id; // Will store the id of the button clicked

		var outputVal = $('#output').val();
		if(outputVal == "ERROR")
		{
			outputVal = '';
		}
		switch(btnId)  // Switch Case that will select case according to value store in btnid
		{
			case 'num1' :
						outputVal = outputVal+'1';
						$('#output').val(outputVal);

						break;
			case 'num2' :
						outputVal = outputVal+'2';
						$('#output').val(outputVal);

						break;
			case 'num3' :
						outputVal = outputVal+'3';
						$('#output').val(outputVal);

						break;
			case 'num4' :
						outputVal = outputVal+'4';
						$('#output').val(outputVal);

						break;
			case 'num5' :
						outputVal = outputVal+'5';
						$('#output').val(outputVal);

						break;
			case 'num6' :
						outputVal = outputVal+'6';
						$('#output').val(outputVal);

						break;
			case 'num7' :
						outputVal = outputVal+'7';
						$('#output').val(outputVal);

						break;
			case 'num8' :
						outputVal = outputVal+'8';
						$('#output').val(outputVal);

						break;
			case 'num9' :
						outputVal = outputVal+'9';
						$('#output').val(outputVal);

						break;
			case 'num0' :
						outputVal = outputVal+'0';
						$('#output').val(outputVal);						
						break;
			case 'dot' :
						if(!decimaladd) // it will check that if there is already a dot in an input value then it will not enter another dot.
						{
							outputVal = outputVal+'.';						
							$('#output').val(outputVal);
							decimaladd = true;		// It will make decimal value true so it can not take another dot in value. 
						}
						break;
			case 'add':
						if(outputVal.length >0)		// It will check that user have input the value or not				
						{
						storedValue = $('#output').val().length>0 ? parseFloat($('#output').val()) : 0;
						$('#output').val('');
						operation = '+';
						decimaladd = false; // this will make decimal value false so when in second input it can take dot again.
						}
						else
						{
							alert('Please First Enter Some Digit'); // If no input from user then it will alert to user to enter some Digit
						}
						break;
			case 'subtract':
						if(outputVal.length >0)						
						{
						storedValue = $('#output').val().length>0 ? parseFloat($('#output').val()) : 0;
						$('#output').val('');
						operation = '-';
						decimaladd = false;
						}
						else
						{
							alert('Please First Enter Some Digit');
						}
						break;
			case 'multiplication' :
						if(outputVal.length >0)						
						{
						storedValue = $('#output').val().length>0 ? parseFloat($('#output').val()) : 0;
						$('#output').val('');
						operation = '*';
						decimaladd = false;
						}
						else
						{
							alert('Please First Enter Some Digit');
						}
						break;
			case 'divison' :
						if(outputVal.length >0)						
						{
						storedValue = $('#output').val().length>0 ? parseFloat($('#output').val()) : 0;
						$('#output').val('');
						operation = '/';
						decimaladd = false;
						}
						else
						{
							alert('Please First Enter Some Digit');
						}
						break;
			case 'equals' :	
						outputVal = parseFloat(outputVal);
						outputVal = calculate(storedValue , outputVal, operation); // It will Go to calculate function with parameter passed with the function call. 
						$('#output').val(outputVal);						
						break;
						
			case 'clear' :
						$('#output').val('');
						outputVal = '';
						storedValue =0;
						operation = '';
						decimaladd = false;
			
			// It will Delete a value from input box. 
			case 'delete' :
						if(outputVal.length >0)						
						{
							outputVal = outputVal.slice(0,-1);
							$('#output').val(outputVal);						
						}
						break;
						
			// It Is used to take out Square root of inserted Value
			case 'sqrt' :
						if(outputVal.length >0)						
						{
							outputVal=Math.sqrt(outputVal);
							$('#output').val(outputVal);						

						}
						break;
			// It Is used to take out percentage of value in input box.	
			case 'percentage' :
						if(outputVal.length >0)						
						{
							outputVal= outputVal / 100;
							$('#output').val(outputVal);						

						}	
						break;
			// This case is used to convert value into Plus Or Minus			
			case 'plusminus' :
						if(outputVal.length >0)						
						{
							outputVal= outputVal * -1;
							$('#output').val(outputVal);						

						}	
						break;
						
			// This case is used to add the value in memory recall 			
			case 'plusmemory' :
						if(outputVal.length >0)						
						{
							if(memory != null)
							{
								outputVal = $('#output').val().length>0 ? parseFloat($('#output').val()) : 0;
								memory = memory + outputVal;
								$('#output').val('');

							}
							else if (memory == 0)
							{
								memory = $('#output').val().length>0 ? parseFloat($('#output').val()) : 0;
								$('#output').val('');
							}
						}	
						alert(memory + ' Addedd to Memory');
						break;
						
			// This case is used to minus the value in memory recall 			
			case 'minusmemory' :
						if(outputVal.length >0)						
						{
							if(memory != null)
							{
								outputVal = $('#output').val().length>0 ? parseFloat($('#output').val()) : 0;
								memory = memory - outputVal;
								$('#output').val('');

							}
							else if (memory == 0)
							{
								memory = $('#output').val().length>0 ? parseFloat($('#output').val()) : 0 * -1 ;
								$('#output').val('');
							}
						}	
						alert(' Value Subtract from memory');
						break;

			// This case is used to add the value in memory recall 			
			case 'memoryrecall' :
						
						$('#output').val(memory);

						break;
			default:


		}
        
    })
});

// Function which will called when equals clicked or press by user to calculate the result

function calculate(storedValue, outputVal, operation)
{	
	switch(operation)
	{							
		case '+':
				outputVal = storedValue + outputVal ;	// It will add the stored value and second value and result will be stored in outputval variable.
				storedValue =0;							// It will remove the first value that was store in StoredValue which was enter by user. 
				operation = '';							// It will also clear the operation stored.
				break;
		case '-':
				outputVal = storedValue - outputVal ;
				storedValue =0;
				operation = '';
				break;
		case '*':
				outputVal = storedValue * outputVal;
				storedValue =0;
				operation = '';
				break;
		case '/':									
				if(outputVal == 0) // It will check that second value is 0 and if it is zero it can not divide with any number so it will show error. 
				{
					outputVal = "ERROR";
				}
				else
				{
					outputVal = storedValue /  outputVal ;										
					storedValue =0;
					operation = '';
				}
				break;

	}
	if(outputVal != "ERROR")
	{
		outputVal = outputVal.toFixed(4); // It wil store the float value of fixed amount of 4 digit after decimal into OutputVal
	}
	return outputVal; // function will return outputVal variable

}

// End Of Code.