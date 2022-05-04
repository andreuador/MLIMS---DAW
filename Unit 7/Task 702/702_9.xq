<html>
<body>
  <h1 align="center">Book List</h1>
  <table border="1">
    <tr>
      <th>Title</th>
      <th>Author</th>
      <th>Price</th>
    </tr>
    {
      for $x in collection(Bookstore)/bookstore/book
      order by $x
      return
      <tr>
        <td>{data($x/title)}</td>
        <td>{data($x/author)}</td>
        <td>{data($x/@price)}</td>
      </tr>
    }
  </table>
</body>
</html>