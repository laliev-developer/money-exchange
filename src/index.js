// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    // Your code goes here!
    // Return an object containing the minimum number of coins needed to make change
    let result = {};
  	if (currency <= 0) return {};  
  	if (currency > 10000) return {error: "You are rich, my friend! We don't have so much coins for exchange"};

  	let H = Math.floor(currency / 50);
  	let Q = Math.floor((currency - H * 50) / 25);
  	let D = Math.floor((currency - Q * 25 - H * 50) / 10);
  	let N = Math.floor((currency - D * 10 - Q * 25 - H * 50) / 5);
  	let P = Math.floor(currency % 5);

  	if (H)  result.H = H;
  	if (Q)  result.Q = Q;
  	if (D)  result.D = D;
  	if (N)  result.N = N;
  	if (P)  result.P = P;

  	return result;
}
