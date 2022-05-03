for $x in collection(Bookstore)/bookstore/book
order by $x/@year, $x/title
return $x/title