import React, { useState } from "react";

const Result = () => {
  const [sformdata, setsformdata] = useState({});
  useState(() => {
    let item = localStorage.getItem("projectinfo");
    item = JSON.parse(item);
    setsformdata(item);
  });
  const printdata = () => {
    var printContents = document.getElementById("printingsection").innerHTML;
    var originalContents = document.body.innerHTML;
    document.body.classList.add("h-screen");
    document.body.classList.add("flex");
    document.body.classList.add("justify-center");
    document.body.classList.add("items-center");
    document.body.classList.add("content-center");
    document.body.innerHTML = printContents;

    window.print();

    document.body.innerHTML = originalContents;
  };
  return (
    <div>
      <div id="printingsection">
        <table className="table-auto text-sm border-2">
          <thead>
            <tr>
              <th colSpan={6} className="border">
                Information
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="py-3 px-6"></td>
              <td className="py-3 px-6"></td>
              <td className="py-3 px-6 text-center" colSpan={4}>
                Project Description
              </td>
            </tr>
            <tr>
              <td className="py-3 px-6 border">Project Name</td>
              <td className="py-3 px-6 border">{sformdata.projectName}</td>
              <td
                className="py-3 px-6 border text-justify"
                rowSpan={3}
                colSpan={10}
              >
                {sformdata.projectDesc}
              </td>
            </tr>
            <tr>
              <td className="py-3 px-6 border">Project Client</td>
              <td className="py-3 px-6 border">{sformdata.Client}</td>
            </tr>
            <tr>
              <td className="py-3 px-6 border">Contractor</td>
              <td className="py-3 px-6 border">{sformdata.Contactor}</td>
            </tr>
            <tr>
              <td className="py-3 px-6 border text-center" colSpan={2}>
                X
              </td>
              <td className="py-3 px-6 border text-center" colSpan={2}>
                Y
              </td>
              <td className="py-3 px-6 border text-center" colSpan={2}>
                Z
              </td>
            </tr>
            <tr>
              <td className="py-3 px-6 border">max</td>
              <td className="py-3 px-6 border">{sformdata.max_x}</td>
              <td className="py-3 px-6 border">max</td>
              <td className="py-3 px-6 border">{sformdata.max_y}</td>
              <td className="py-3 px-6 border">max</td>
              <td className="py-3 px-6 border">{sformdata.max_z}</td>
            </tr>
            <tr>
              <td className="py-3 px-6 border">min</td>
              <td className="py-3 px-6 border">{sformdata.min_x}</td>
              <td className="py-3 px-6 border">min</td>
              <td className="py-3 px-6 border">{sformdata.min_y}</td>
              <td className="py-3 px-6 border">min</td>
              <td className="py-3 px-6 border">{sformdata.min_z}</td>
            </tr>
            <tr></tr>
            <tr></tr>
          </tbody>
          <tfoot></tfoot>
        </table>
      </div>
      <div className="text-right">
        <button className="border-2 px-4 py-1 my-5" onClick={printdata}>
          Print
        </button>
      </div>
    </div>
  );
};

export default Result;
