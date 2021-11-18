var Stack =[];
var stackInfix=[];
var Prefix="";
var Infix="";
var lengthStr=0;
function calulatePrefix()
{
	
	
	var PostFixstring = document.getElementById("PostfixString").value;
	var Infixanswer=document.getElementById("Infixanswer");
	//console.log(PostFixstring);
	lengthStr=PostFixstring.length;
	Stack=[];
	stackInfix=[];
	Infix="";
	Prefix="";
	for(var i=0;i<lengthStr;i++)
	{
		
		
		if((PostFixstring[i]>='A' && PostFixstring[i]<='Z') || (PostFixstring[i]>='a' && PostFixstring[i]<='z'))
		{
			console.log(PostFixstring[i]);
			
		}else
		{
			if(PostFixstring[i]<=0 && PostFixstring[i]>=9)
			{
				Stack.push(PostFixstring[i]);
			}else
			{

			if(i==(lengthStr-1))
			{
				MakeTheString(PostFixstring[i]);
			}else
			{
			  StackPop(PostFixstring[i]);	
			}
		}
		}
	}
	

	PrefixtoInfix();
	
	document.getElementById("answer").innerHTML="Answer Prefix:  "+Prefix;
		
	Infixanswer.innerHTML="Answer Infix:  "+Infix;
	
	
//	console.log(Infix);
  //   console.log(stackInfix);
	//console.log(Prefix);
	
}


function StackPop(operator)
{
	
	var operand2=Stack.pop();
	var operand1=Stack.pop();
	//console.log("Operand2=="+operand2+"--"+"operand1=="+operand1);
	var temp= operator+operand1+operand2;
	Stack.push(temp);
}

function StackPopInfix(operator)
{
	
	var operand2=stackInfix.pop();
	var operand1=stackInfix.pop();
	//console.log("Operand2=="+operand2+"--"+"operand1=="+operand1);
	var temp= ")"+operand1+operator+operand2+"(";
	stackInfix.push(temp);
}

function MakeTheString(last)
{
	var i=0;
	while(i<Stack.length)
	{
		Prefix+=Stack[i];
		i++;
	}
	Prefix=last.concat(Prefix);
}

function MakeTheInfixString()
{
	var i=(stackInfix[0].length-1);
	while(i>=0)
	{
		//console.log(stackInfix[0][i]);
		Infix+=stackInfix[0][i];
		i--;
	}

}


function PrefixtoInfix()
{
	var len =Prefix.length;
	//console.log(len);
	for(var i=len-1;i>=0;i--)
	{
		
		if((Prefix[i]>='A' && Prefix[i]<='Z') || (Prefix[i]>='a' && Prefix[i]<='z')|| (Prefix[i][i]<='0' && Prefix[i][i]>='9'))
		{
			stackInfix.push(Prefix[i]);
		}else
		{
			StackPopInfix(Prefix[i]);	
		}
	}
	
	MakeTheInfixString();
	
}