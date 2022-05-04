for $x in collection(Bookstore)/bookstore/book
let $c := $x/author
return
<libro>
  {$x/title,<authors>{count($c)}</authors>}
</libro>