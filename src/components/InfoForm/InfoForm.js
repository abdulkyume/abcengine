import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const InfoForm = (props) => {
  const { formdata, setformdata } = props;
  const navigate = useNavigate();
  useEffect(() => {
    if (Object.keys(formdata).length > 0) {
      document.getElementById("projectname").placeholder = formdata.projectName;
      document.getElementById("projectname").setAttribute("readonly", "true");
      document.getElementById("projectdesc").placeholder = formdata.projectDesc;
      document.getElementById("projectdesc").setAttribute("readonly", "true");
      document.getElementById("client").placeholder = formdata.Client;
      document.getElementById("client").setAttribute("readonly", "true");
      document.getElementById("contactor").placeholder = formdata.Contactor;
      document.getElementById("contactor").setAttribute("readonly", "true");
      document.getElementById("submit").classList.add("hidden");
      document.getElementById("heading").classList.add("hidden");
    }
  });

  const InfoFormValue = (e) => {
    e.preventDefault();
    var projectname = e.target[0].value;
    var projectdesc = e.target[1].value;
    var client = e.target[2].value;
    var contactor = e.target[3].value;
    var formvalue = {
      projectName: projectname,
      projectDesc: projectdesc,
      Client: client,
      Contactor: contactor,
    };
    setformdata(formvalue);
    localStorage.setItem("projectinfo", JSON.stringify(formvalue));
    navigate("/InfoForm-two");
  };

  return (
    <div>
      <div className="my-3 font-bold text-2xl" id="heading">
        Enter Information
      </div>
      <form
        className="sm:w-full md:w-[30rem] lg:w-[30rem]"
        onSubmit={InfoFormValue}
      >
        <input
          type="text"
          className="form-input px-3 py-3 w-full my-1 border-2"
          placeholder="Project Name"
          name="projectname"
          id="projectname"
          required
        />
        <textarea
          className="form-input px-3 py-3 w-full my-1 border-2"
          placeholder="Project Description"
          name="projectdesc"
          id="projectdesc"
          required
        ></textarea>
        <input
          type="text"
          className="form-input px-4 py-3 w-full my-3 border-2"
          placeholder="Client"
          name="client"
          id="client"
          required
        />
        <input
          type="text"
          className="form-input px-3 py-3 w-full my-1 border-2"
          placeholder="Contactor"
          name="contactor"
          id="contactor"
          required
        />
        <div className="flex items-center">
          <div className="w-full">
            <input
              type="submit"
              className="form-input px-4 py-3 my-1 border-2"
              id="submit"
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default InfoForm;
