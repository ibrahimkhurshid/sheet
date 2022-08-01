import React, { useEffect } from "react";
import Ask from "./Ask";
import { Input, Table, RemoveButton } from "./CustomComponents";
import { useDispatch, useSelector } from "react-redux";
import { initData, setData, removeRow, removeCol } from "./SheetSlice";
import Footer from "./Footer";
import "./footer.css";

const Sheet = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.sheet.data);
  const theadContent = () => {
    return (
      <tr>
        <th
          style={{
            width: "fit-content",
            color: "#1a73e8",
            "font-size": "0.8rem",
          }}
        >{`${data.length} x ${data[0].length}`}</th>
        {Array.from(Array(data[0].length).keys()).map((c) => (
          <th>
            <RemoveButton
              title={`remove col:${c + 1}`}
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
          title={`remove row:${r + 1}`}
          onClick={() => dispatch(removeRow({ row: r }))}
          tabIndex={-1}
        >
          {r + 1}
        </RemoveButton>
        {Array.from(Array(data[0].length).keys()).map((c) => (
          <td>
            <Input
              key={data[r][c]}
              data-loc={`${r}:${c}`}
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

  return rc.row !== 0 ? (
    <>
      <>
        <Table>
          <thead>{theadContent()}</thead>
          <tbody>{tbodyContent(data)}</tbody>
        </Table>
      </>
      <Footer />
    </>
  ) : (
    <Ask />
  );
};

export default Sheet;
