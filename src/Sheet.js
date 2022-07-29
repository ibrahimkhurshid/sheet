import React, { useEffect, useState } from "react";
import Ask from "./Ask";
import { Input, Table, RemoveButton } from "./CustomComponents";
import { useDispatch, useSelector } from "react-redux";
import { initData, setData, resetData } from "./SheetSlice";
import CustomComponents from "./CustomComponents";

const Sheet = () => {
  const [row, setRow] = useState(10);
  const [col, setCol] = useState(10);
  const dispatch = useDispatch();
  const data = useSelector((state) => state.sheet.data);
  const theadContent = () => {
    return (
      <tr>
        <th>.</th>
        {Array.from(Array(data[0].length).keys()).map((c) => (
          <th>
            <RemoveButton onClick={() => alert(c)} tabIndex={-1}>
              {c}
            </RemoveButton>
          </th>
        ))}
      </tr>
    );
  };

  const tbodyContent = (data) => {
    return Array.from(Array(data.length).keys()).map((r) => (
      <tr>
        <RemoveButton onClick={() => alert(r)} tabIndex={-1}>
          {r}
        </RemoveButton>
        {Array.from(Array(data[0].length).keys()).map((c) => (
          <td>
            <Input
              defaultValue={data[r][c]}
              onBlur={(e) => {
                dispatch(setData({ row: r, col: c, val: e.target.value }));
                console.log(e.target.value);
              }}
            ></Input>
          </td>
        ))}
      </tr>
    ));
  };
  console.log(data);
  const rc = { row: data.length, col: data.length === 0 ? 0 : data[0].length };
  useEffect(() => {
    dispatch(initData());
  }, []);

  return (
    <div>
      {console.log(data)}
      {console.log("row", rc.row)}
      {console.log("col", rc.col)}
      {rc.row !== 0 ? (
        <Table>
          <thead>{theadContent()}</thead>
          <tbody>{tbodyContent(data)}</tbody>
        </Table>
      ) : (
        <Ask />
      )}
    </div>
  );
};

export default Sheet;
