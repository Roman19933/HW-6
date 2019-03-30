function sumAll(n) { 

  if (n == 1) return 1;
  return n + sumAll(n - 1);
 }
sumAll(4); // 3
sumAll(4); // 10