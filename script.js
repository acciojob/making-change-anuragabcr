const makeChange = (c) => {
  // your name here
	curr = {
        q: 25,
        d: 10,
        n: 5,
        p: 1
    }
    mon = {
        q: 0,
        d: 0,
        n: 0,
        p: 0
    }
    for (const key of curr) {
        while(c >= curr[key]) {
            mon[key] += 1
            c -= curr[key]
        }
    }
    return mon;
};

// Do not the change the code below
const c = prompt("Enter c: ");
alert(JSON.stringify(makeChange(c)));
