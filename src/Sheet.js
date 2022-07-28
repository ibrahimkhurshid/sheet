import React, { useState } from "react";
import { Input, Table, RemoveButton } from "./CustomComponents";
import { useDispatch } from "react-redux";
import CustomComponents from "./CustomComponents";

const Sheet = () => {
  const [row, setRow] = useState(26);
  const [col, setCol] = useState(15);

  const theadContent = (
    <tr>
      <th>.</th>
      {Array.from(Array(col).keys()).map((c) => (
        <th>
          <RemoveButton onClick={() => alert(c)} tabIndex={-1}>
            {c}
          </RemoveButton>
        </th>
      ))}
    </tr>
  );

  const tbodyContent = Array.from(Array(row).keys()).map((r) => (
    <tr>
      <RemoveButton onClick={() => alert(r)} tabIndex={-1}>
        {r}
      </RemoveButton>
      {Array.from(Array(col).keys()).map((c) => (
        <td>
          <Input></Input>
        </td>
      ))}
    </tr>
  ));
  return (
    <div>
      <Table>
        <thead>{theadContent}</thead>
        <tbody>{tbodyContent}</tbody>
      </Table>
    </div>
  );
};

export default Sheet;
