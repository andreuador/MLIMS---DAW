for $x in collection(Bookstore)/bookstore/book
let $a:= $x/author
return
<book>{$x/title, <author>{count($a)}</author>}</book>