function Tr(st, idx) {
  return (
    <tr key={idx}>
      <td>{st.fname}</td>
      <td>{st.lname}</td>
      <td>{st.mark1}</td>
      <td>{st.mark2}</td>
      <td>{st.mark3}</td>
      <td>{st.mark4}</td>
      <td>{st.mark5}</td>
      <td>{st.mark6}</td>
      <td>{st.markAve()}</td>
    </tr>
  );
}
function StuTable(props) {
  return (
    <table border="1">
      <thead>
        <tr>
          <th>Fname</th>
          <th>Lname</th>
          <th>HTML</th>
          <th>CSS</th>
          <th>JS-1</th>
          <th>JS-2</th>
          <th>PHP</th>
          <th>React</th>
          <th>Average</th>
        </tr>
      </thead>
      <tbody>
        {/* map is callback function */}
        {props.stList.map(Tr)}
      </tbody>
      <tfoot>
        <tr>
          <td colSpan="8" align="right">
            High Score:
          </td>
        </tr>
      </tfoot>
    </table>
  );
}
export default StuTable;
