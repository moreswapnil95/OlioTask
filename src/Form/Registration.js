import axios from "axios";
import React, { useState } from "react";

const Registration = () => {
  let state = [
    "Andhra Pradesh",
    "Arunachal Pradesh",
    "Assam",
    "Bihar",
    "Chhattisgarh",
    "Goa",
    "Gujarat",
    "Haryana",
    "Himachal Pradesh",
    "Jammu and Kashmir",
    "Jharkhand",
    "Karnataka",
    "Kerala",
    "Madhya Pradesh",
    "Maharashtra",
    "Manipur",
    "Meghalaya",
    "Mizoram",
    "Nagaland",
    "Odisha",
    "Punjab",
    "Rajasthan",
    "Sikkim",
    "Tamil Nadu",
    "Telangana",
    "Tripura",
    "Uttarakhand",
    "Uttar Pradesh",
    "West Bengal",
    "Andaman and Nicobar Islands",
    "Chandigarh",
    "Dadra and Nagar Haveli",
    "Daman and Diu",
    "Delhi",
    "Lakshadweep",
    "Puducherry",
  ];

  const [base64String, setBase64String] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);

  const [data, setData] = useState({
    email: "",
    date: "",
    hobbies: [],
    address: "",
    gender: "",
    state: "",
    file: "",
    ftype: "",
  });

  const handleChange = (event) => {
    // console.log(event.target.value)
    if (event.target.name === "hobbies") {
      let copy = { ...data };

      if (event.target.checked && data.hobbies.length <= 2) {
        copy.hobbies.push(event.target.value);
      } else {
        copy.hobbies = copy.hobbies.filter((c) => c !== event.target.value);
      }
      setData(copy);
    } else {
      setData({ ...data, [event.target.name]: event.target.value });
    }
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      setSelectedFile(file);
      const reader = new FileReader();

      reader.onload = (e) => {
        // The result property contains the Base64 string
        const base64 = e.target.result;
        let newbase64 = base64.split(",")[1];

        // Check if the Base64 string has a prefix (e.g., "data:image/jpeg;base64,")
        // const prefix = "data:image/jpeg;base64,";
        // if (base64.startsWith(prefix)) {
        //   // Remove the prefix
        //   newbase64 = base64.slice(prefix.length);
        // }

        setBase64String(base64);
        // console.log(newbase64);

        setData({ ...data, file: newbase64, ftype: base64.split(",")[0] });
      };

      // Read the file as a Data URL, which converts it to a Base64 string
      reader.readAsDataURL(file);
    }
  };

  // console.log(data);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (data?.hobbies.length > 2 || data?.hobbies.length < 2) {
      alert("please select minimum 2 checkbox");
    } else {
      // console.log(data)
      axios
        .post("http://localhost:8004/user/register", data)
        .then((response) => alert(response.data))
        .catch((error) => alert(error));
    }
  };

  // console.log(data);

  return (
    <div className="registrar m-1">
      <div className="container">
        <div
          className="row gy-3 mt-3 p-1 rounded border border-4 border-danger"
          style={{ backgroundColor: "burlywood" }}
        >
          <div className="col-12  text-center">
            <p className="text-danger">Registration Form</p>
          </div>

          <div className="col-12">
            <form action="" onSubmit={handleSubmit}>
              <div className="row g-2">
                <div className="col-12">
                  <div className="row d-flex justify-space-between align-items-center">
                    <label
                      htmlFor="staticEmail"
                      className="col-4 col-sm-2 col-form-label fw-bold"
                    >
                      name :-
                    </label>
                    <div className="col-8 col-sm-10">
                      <input
                        type="text"
                        onChange={handleChange}
                        id="staticEmail"
                        className="w-100"
                        name="email"
                        required
                      />
                    </div>
                  </div>
                </div>

                <div className="col-12 ">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="row d-flex justify-space-between align-items-center">
                        <label
                          htmlFor="date"
                          className="col-4 col-sm-3 col-form-label fw-bold"
                        >
                          Date :-
                        </label>
                        <div className="col-8 col-sm-9 text-center">
                          <input
                            type="date"
                            onChange={handleChange}
                            id="date"
                            name="date"
                            required
                          />
                        </div>
                      </div>

                      <div className="row d-flex justify-space-between align-items-center">
                        <label
                          htmlFor=""
                          className="col-4 col-sm-3 col-form-label fw-bold"
                        >
                          Hobbies :-
                        </label>
                        <div className="col-8 col-sm-9 text-center">
                          <input
                            className="form-check-input me-1"
                            type="checkbox"
                            id="inlineCheckbox1"
                            value="Sports"
                            name="hobbies"
                            onChange={handleChange}
                          />
                          <label
                            className="form-check-label me-1"
                            htmlFor="inlineCheckbox1"
                          >
                            Sports
                          </label>

                          <input
                            className="form-check-input me-1"
                            type="checkbox"
                            id="inlineCheckbox2"
                            value="Reading"
                            name="hobbies"
                            onChange={handleChange}
                          />
                          <label
                            className="form-check-label me-1"
                            htmlFor="inlineCheckbox2"
                          >
                            Reading
                          </label>

                          <input
                            className="form-check-input me-1"
                            type="checkbox"
                            id="inlineCheckbox3"
                            value="Cooking"
                            name="hobbies"
                            onChange={handleChange}
                          />
                          <label
                            className="form-check-label me-1"
                            htmlFor="inlineCheckbox3"
                          >
                            Cooking
                          </label>
                          <div className="text-danger">
                            {data?.hobbies.length > 2
                              ? "Please select at least two hobbies."
                              : ""}
                          </div>
                        </div>
                      </div>

                      <div className="row d-flex justify-space-between align-items-center">
                        <label
                          htmlFor="address"
                          className="col-4 col-sm-3 col-form-label fw-bold"
                        >
                          Address :-
                        </label>
                        <div className="col-8 col-sm-9 text-center">
                          <textarea
                            id="address"
                            cols={40}
                            className="rounded"
                            name="address"
                            onChange={handleChange}
                            required
                          />
                        </div>
                      </div>
                    </div>

                    <div className="col-md-6">
                      <div className="row d-flex justify-space-between align-items-center">
                        <label
                          htmlFor="form-check"
                          className="col-4 col-sm-3 col-form-label fw-bold"
                        >
                          Gender :-
                        </label>
                        <div className="col-8 col-sm-9 text-center">
                          <div className="form-check form-check-inline">
                            <input
                              className="form-check-input"
                              type="radio"
                              name="gender"
                              id="inlineRadio1"
                              value="Male"
                              onChange={handleChange}
                              required
                            />
                            <label
                              className="form-check-label"
                              htmlFor="inlineRadio1"
                            >
                              Male
                            </label>
                          </div>
                          <div className="form-check form-check-inline">
                            <input
                              className="form-check-input"
                              type="radio"
                              name="gender"
                              id="inlineRadio2"
                              value="Female"
                              onChange={handleChange}
                              required
                            />
                            <label
                              className="form-check-label"
                              htmlFor="inlineRadio2"
                            >
                              Female
                            </label>
                          </div>
                        </div>

                        <div className="row d-flex justify-space-between align-items-center mb-3">
                          <label
                            htmlFor="state"
                            className="col-4 col-sm-3 col-form-label fw-bold"
                          >
                            State :-
                          </label>
                          <div className="col-8 col-sm-9 text-center">
                            <select
                              className="w-75 p-1 rounded"
                              id="state"
                              aria-label="Default select example"
                              name="state"
                              onChange={handleChange}
                              required
                            >
                              <option value="">Open this select menu</option>
                              {state.map((s, i) => (
                                <option value={s} key={i}>
                                  {s}
                                </option>
                              ))}
                            </select>
                          </div>
                        </div>

                        <div className="row d-flex justify-space-between align-items-center">
                          <label
                            htmlFor="formFileSm"
                            className="col-4 col-sm-3 col-form-label fw-bold"
                          >
                            File :-
                          </label>
                          <div className="col-8 col-sm-9 text-center">
                            <input
                              type="file"
                              id="label"
                              style={{ display: "none" }}
                              onChange={handleFileChange}
                              name="file"
                              required
                            />
                            <button
                              type="button"
                              className="btn btn-secondary me-2"
                            >
                              <label
                                htmlFor="label"
                                style={{ cursor: "pointer" }}
                              >
                                Choose file
                              </label>
                            </button>
                            {/* {base64String && (
                              <a
                                href={base64String}
                                download={selectedFile.name}
                              >
                                {selectedFile.name}
                              </a>
                            )} */}
                            {selectedFile ? (
                              base64String && (
                                <a
                                  href={base64String}
                                  download={selectedFile.name}
                                >
                                  {selectedFile.name}
                                </a>
                              )
                            ) : (
                              <span className="text-danger text-decoration-underline fw-bold">
                                No File Selected
                              </span>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="col-12 mt-4 mb-5">
                      <div className="row d-flex justify-content-center align-items-center justify-content-evenly">
                        <button type="submit" className="btn btn-success w-25">
                          Submit
                        </button>
                        <button type="button" className="btn btn-danger w-25">
                          Cancel
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registration;
