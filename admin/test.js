function loopFrom1ToN(n) {
  if (n > 10) {
    return;
  }
  console.log(n);
  loopFrom1ToN(n + 1);
}

loopFrom1ToN(1);
