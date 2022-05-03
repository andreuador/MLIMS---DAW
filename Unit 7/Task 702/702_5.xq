for $x in collection(Bookstore)/bookstore/book
where $x/year > 2000 and $x/title
return <book>{$x/year} {$x/title}</book>