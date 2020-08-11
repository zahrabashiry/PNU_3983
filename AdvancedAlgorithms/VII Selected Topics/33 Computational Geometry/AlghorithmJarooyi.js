let HEAP = [];

const A = {
  language: 'JavaScript'
};

HEAP.push(A);

const root = () => HEAP[0];

const B = {
  language: 'Rust'
};

HEAP.push(B);

A.B = B;

const C = {
  language: 'Elm'
};

HEAP.push(C);

A.C = C;

// Let's remove the reference C
delete A.C;

const D = {
  language: 'GoLang'
};

HEAP.push(D);

// Object "D" is reachable from "B" and is allocated the memory
B.D = D;

// "B" reference is removed from "A".
delete A.B;