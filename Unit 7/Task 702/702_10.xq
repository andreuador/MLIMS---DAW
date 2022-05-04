let $total := in collection(Bookstore)/bookstore/book
return
<html>
  <body>
    <table border="1">
      <tr>
        <th>Title</th>
        <th>Price</th>
      </tr>
      {
        for $x in collection(Bookstore)/bookstore/book
        where $x/@price
        return
        <tr>
          <td>{$x/title}</td>
          <td>{$x/@price}</td>
        </tr>
      }
      <tr>
        <td>Total price</td>
        <td>{sum($x/price)}</td>
      </tr>
    </table>
  </body>
</html>