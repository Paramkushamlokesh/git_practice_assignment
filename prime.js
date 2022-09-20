

function primes(num){
	let factor=0;
	for(let i=1;i<=num;i++){
		if(num%i==0){
			factor++;
		}
	}
	if(factor==2){
	  return false;
  }
  else{
    return true;
  }
	
}

let ans=primes(7);
if(ans==true){
console.log("prime");
}
else{
console.log("not prime");
}