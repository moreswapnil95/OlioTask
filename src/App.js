// import logo from './logo.svg';
// import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Registration from "./Form/Registration";

function App() {
  // const [base64String, setBase64String] = useState("");
  // const [selectedFile, setSelectedFile] = useState(null);

  // const handleFileChange = (e) => {
  //   const file = e.target.files[0];

  //   if (file) {
  //     setSelectedFile(file);
  //     const reader = new FileReader();

  //     reader.onload = (e) => {
  //       // The result property contains the Base64 string
  //       const base64 = e.target.result;
  //       setBase64String(base64);
  //     };

  //     // Read the file as a Data URL, which converts it to a Base64 string
  //     reader.readAsDataURL(file);
  //   }
  // };

  return (
    // <div>
    //   <input
    //     type="file"
    //     onChange={handleFileChange}
    //     id="label"
    //     style={{ display: "none" }}
    //   />
    //   <label htmlFor="label">Choose file</label>
    //   <div>
    //     <strong>Base64 String:</strong>
    //     <textarea value={base64String} rows={10} cols={50} readOnly />
    //   </div>

    //   {base64String && (
    //     <a href={base64String} download={selectedFile.name}>
    //       {selectedFile.name}
    //     </a>
    //   )}

    //   <div className="container">
    //     <div className="row">
    //       <div className="col-6 border">swap</div>
    //       <div className="col-6 border">poiu</div>
    //     </div>
    //   </div>

    //   <div class="input-group mb-3">
    //     <input type="file" class="form-control" id="inputGroupFile02" />
        
    //   </div>
    // </div>
    <>
    <Registration />
    </>
  );
}

export default App;
