let $books := collection(Bookstore)//book[@category = "web"]
  return
   <html>
      <body>
      <table>
      <tr>
        <td>Title</td>
        <td>Author</td>
        <td>Price</td>
      </tr>
      {
    for $b in $books
      return 
     
      <tr>
        <td>{data($b/title)}</td>
        <td>{data($b/author)}</td>
        <td>{data($b/@price) || data($b/price)}</td>
      </tr>
    }
    {
      let $price := sum($books/@price)
      let $price2 := sum($books/price)
      
      return
      <tr>
        <td>{$price + $price2}</td>
      </tr>
    }
</table>
</body>
</html>