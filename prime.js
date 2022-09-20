

function primes(numcheck){
	let factor=0;
	for(let i=1;i<=numcheck;i++){
		if(numcheck%i==0){
			factor++;
		}
	}
	if(factor==2){
	  return true;
  	}
  	else{
    	return false;
  	}
	
}

let ans=primes(7);
if(ans==true){
console.log("prime");
}
else{
console.log("not prime");
}