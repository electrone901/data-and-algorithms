/**
 * Write code to remove duplicates from an unsorted linked list.
 *
 * FOLLOW UP
 * How would you solve this problem if a temporary buffer is not allowed?
 */
/* CLASS */
var Node = function(value) {
  this.value = value;
  this.next = null;
};

function removeDups(head) {
  let hash = {};
  let cur = head;
  let prev = null;

  while(cur) {
    if(hash[cur.val]) {
      prev.next = cur.next;
    } 
    else {
      hash[cur.val] = cur.val;
      prev = cur;
    } 
    cur = cur.next;  
  } 
}
var printLinkedList = function(head) {
  var node = head;
  console.log('start of linked list');
  while (node !== null) {
    console.log(node.value);
    node = node.next;
  }
  console.log('Now delete duplicates');
  console.log();
};


/* TESTS */
var a = new Node('a');
var b = new Node('b');
var c = new Node('c');
var d = new Node('d');
var e = new Node('e');
var f = new Node('a');

a.next = b;
b.next = c;
c.next = d;
d.next = e;
e.next = f;

printLinkedList(a);
removeDups(a);
printLinkedList(a);


