var start = Date.now();
console.log("locked");
while(true) {
	if (Date.now() - start > 9000) break;
}
console.log("unlocked");