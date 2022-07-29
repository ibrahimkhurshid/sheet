import React, { useEffect, useState } from "react";
import Ask from "./Ask";
import { Input, Table, RemoveButton } from "./CustomComponents";
import { useDispatch, useSelector } from "react-redux";
import { initData, setData, removeRow, removeCol } from "./SheetSlice";

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
            <RemoveButton
              onClick={() => dispatch(removeCol({ col: c }))}
              tabIndex={-1}
            >
              {c + 1}
            </RemoveButton>
          </th>
        ))}
      </tr>
    );
  };

  const tbodyContent = (data) => {
    return Array.from(Array(data.length).keys()).map((r) => (
      <tr>
        <RemoveButton
          onClick={() => dispatch(removeRow({ row: r }))}
          tabIndex={-1}
        >
          {r + 1}
        </RemoveButton>
        {Array.from(Array(data[0].length).keys()).map((c) => (
          <td>
            <Input
              key={data[r][c]}
              defaultValue={data[r][c]}
              onBlur={(e) => {
                dispatch(setData({ row: r, col: c, val: e.target.value }));
              }}
            ></Input>
          </td>
        ))}
      </tr>
    ));
  };
  const rc = { row: data.length, col: data.length === 0 ? 0 : data[0].length };
  useEffect(() => {
    dispatch(initData());
  }, []);

  return (
    <div>
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
