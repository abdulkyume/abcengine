import React, { useEffect, useState } from "react";
import InfoForm from "../InfoForm/InfoForm";
import { useNavigate } from "react-router-dom";
import Papa from "papaparse";
import LineChart from "../LineChart/LineChart";

const InfoFormt = (props) => {
  const { formdata, setformdata } = props;
  const [graphdata, setgraphdata] = useState([]);

  const navigate = useNavigate();
  const [sformdata, setsformdata] = useState({});
  useState(() => {
    let item = localStorage.getItem("projectinfo");
    item = JSON.parse(item);
    setsformdata(item);
  });
  const InfoFormValue = (e) => {
    e.preventDefault();
    var max_x = e.target[1].value;
    var min_x = e.target[2].value;
    var max_y = e.target[3].value;
    var min_y = e.target[4].value;
    var max_z = e.target[5].value;
    var min_z = e.target[6].value;
    var formvalue = {
      max_x: max_x,
      min_x: min_x,
      max_y: max_y,
      min_y: min_y,
      max_z: max_z,
      min_z: min_z,
    };
    var allformdata = { ...formdata, ...formvalue };
    localStorage.setItem("projectinfo", JSON.stringify(allformdata));
    setformdata(allformdata);
    navigate("/result");
  };
  const readfile = (e) => {
    const files = e.target.files;
    if (files) {
      Papa.parse(files[0], {
        complete: function (results) {
          let data = results.data;
          setgraphdata(data);
          let max_x = data[1][1];
          let min_x = data[1][1];
          let max_y = data[1][2];
          let min_y = data[1][2];
          let max_z = data[1][3];
          let min_z = data[1][3];
          for (var i = 1; i < data.length; i++) {
            if (parseFloat(data[i][1]) > max_x) {
              max_x = parseFloat(data[i][1]);
            }
            if (parseFloat(data[i][1]) < min_x) {
              min_x = parseFloat(data[i][1]);
            }
            if (parseFloat(data[i][2]) > max_y) {
              max_y = parseFloat(data[i][2]);
            }
            if (parseFloat(data[i][2]) < min_y) {
              min_y = parseFloat(data[i][2]);
            }

            if (parseFloat(data[i][3]) > max_z) {
              max_z = parseFloat(data[i][3]);
            }
            if (parseFloat(data[i][3]) < min_z) {
              min_z = parseFloat(data[i][3]);
            }
          }
          document.getElementById("max-x").value = max_x;
          document.getElementById("min-x").value = min_x;
          document.getElementById("max-y").value = max_y;
          document.getElementById("min-y").value = min_y;
          document.getElementById("max-z").value = max_z;
          document.getElementById("min-z").value = min_z;
        },
      });
    }
  };
  return (
    <div>
      <div className="my-3 font-bold text-2xl text-center p-9">
        Enter Other Information
      </div>
      <InfoForm formdata={sformdata} />
      <form
        className="sm:w-full md:w-[30rem] lg:w-[30rem]"
        onSubmit={InfoFormValue}
      >
        <label>
          Upload File
          <input
            type="file"
            className="form-input px-4 py-3 w-full my-3 border-2"
            placeholder="file"
            name="file"
            id="file"
            accept=".csv,.xlsx,.xls"
            onChange={readfile}
          />
        </label>

        <LineChart graphdata={graphdata} />

        <input
          type="number"
          className="form-input px-4 py-3 w-[50%] my-3 border-2"
          placeholder="max-X"
          name="max-x"
          id="max-x"
          step="0.001"
          required
        />
        <input
          type="number"
          className="form-input px-4 py-3 w-[50%] my-3 border-2"
          placeholder="min-x"
          name="min-x"
          id="min-x"
          step="0.001"
          required
        />
        <input
          type="number"
          className="form-input px-4 py-3 w-[50%] my-3 border-2"
          placeholder="max-Y"
          name="max-y"
          id="max-y"
          step="0.001"
          required
        />
        <input
          type="number"
          className="form-input px-4 py-3 w-[50%] my-3 border-2"
          placeholder="min-Y"
          name="min-y"
          id="min-y"
          step="0.001"
          required
        />
        <input
          type="number"
          className="form-input px-4 py-3 w-[50%] my-3 border-2"
          placeholder="max-Z"
          name="max-z"
          id="max-z"
          step="0.001"
          required
        />
        <input
          type="number"
          className="form-input px-4 py-3 w-[50%] my-3 border-2"
          placeholder="min-Z"
          name="min-z"
          id="min-z"
          step="0.001"
          required
        />
        <div className="flex items-center">
          <div className="w-full">
            <input
              type="submit"
              className="form-input px-4 py-3 my-3 border-2"
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default InfoFormt;
