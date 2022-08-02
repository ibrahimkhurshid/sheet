import React, { useEffect } from "react";
import Ask from "./Ask";
import { Input, Table, RemoveButton } from "./CustomComponents";
import { useDispatch, useSelector } from "react-redux";
import { initData, setData, removeRow, removeCol } from "./SheetSlice";
import Footer from "./Footer";
import "./footer.css";
import { useFormik } from "formik";
import * as Yup from "yup";

const objGen = (rows, cols, fill) => {
  const initObj = {};
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      initObj[`${i}:${j}`] = fill;
    }
  }
  return initObj;
};

const validationBinder = (rows, cols, rule) => {
  const initObj = {};
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      initObj[`${i}:${j}`] = rule;
    }
  }
  return initObj;
};

const initFormik = (rows, cols) => {
  const initObj = {};
  if (localStorage.getItem("sheet") !== null) {
    const tmp = JSON.parse(localStorage.getItem("sheet"));
    for (let i = 0; i < rows; i++) {
      for (let j = 0; j < cols; j++) {
        initObj[`${i}:${j}`] = tmp[i][j];
      }
    }
    console.log("formik refrsh inti", initObj);
    return initObj;
  } else {
    return objGen(rows, cols, "@");
  }
};
const Sheet = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.sheet.data);
  const rc = { row: data.length, col: data.length === 0 ? 0 : data[0].length };
  const valRul = Yup.string()
    .max(10, "longer tha 15")
    .min(1, "can't be emtpy")
    .required("required");

  const formik = useFormik({
    initialValues: initFormik(rc.row, rc.col), //objGen(rc.row, rc.col, ""),
    validationSchema: Yup.object(validationBinder(rc.row, rc.col, valRul)),
    onSubmit: (values) => {
      console.log("formikOnSubmit", values);
      console.log("errors", formik.errors);
    },
  });
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
              value={formik.values[`${r}:${c}`]}
              onChange={formik.handleChange}
              name={`${r}:${c}`}
              key={data[r][c]}
              data-loc={`${r}:${c}`}
              defaultValue={data[r][c]}
              onBlur={(e) => {
                dispatch(setData({ row: r, col: c, val: e.target.value }));
                console.log(formik.errors[`${r}:${c}`]);
              }}
            ></Input>
            <sub>{formik.errors[`${r}:${c}`]}</sub>
          </td>
        ))}
      </tr>
    ));
  };
  useEffect(() => {
    dispatch(initData());
  }, []);

  return rc.row !== 0 ? (
    <>
      {console.log("formic", formik.values)}
      <form onSubmit={formik.handleSubmit}>
        <Table>
          <thead>{theadContent()}</thead>
          <tbody>{tbodyContent(data)}</tbody>
        </Table>
        <button type="submit">SAVE FORMIK</button>
      </form>
      <Footer />
    </>
  ) : (
    <Ask />
  );
};

export default Sheet;
