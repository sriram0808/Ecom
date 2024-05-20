

import "../Assests/Css/Edit.css";

let Editprofile = () => {
  return (
    <div>
      <div className="container mt-5 p-5" style={{  borderRadius: "5px", backgroundColor: "rgb(248,248,248)" }}>
        <div className="row mb-3 align-items-center">
          <div className="col">
            <label htmlFor="" className="mb-2">Name</label>
            <input type="text" className="form-control" placeholder="Sri Ram" />
          </div>
          <div className="col-auto">
            <button className="btn btn-primary my-4 editButton">Edit</button>
          </div>
        </div>
        <div className="row mb-3 align-items-center">
          <div className="col">
            <label htmlFor="" className="mb-2">Email</label>
            <input type="email" className="form-control" placeholder="abc@gmail.com" />
          </div>
          <div className="col-auto">
            <button className="btn btn-primary my-4 editButton">Edit</button>
          </div>
        </div>
        <div className="row mb-3 align-items-center">
          <div className="col">
            <label htmlFor="" className="mb-2">Mobile Number</label>
            <input type="text" className="form-control" placeholder="***********98" />
          </div>
          <div className="col-auto">
            <button className="btn btn-primary my-4 editButton">Edit</button>
          </div>
        </div>
        <div className="row mb-3 align-items-center">
          <div className="col">
            <label htmlFor="" className="mb-2">Password</label>
            <input type="password" className="form-control" placeholder="*****" />
          </div>
          <div className="col-auto">
            <button className="btn btn-primary my-4 editButton">Edit</button>
          </div>
        </div>
        <div className="row mb-3 align-items-center">
          <div className="col">
            <label htmlFor="" className="mb-2">Address</label>
            <textarea className="form-control" placeholder="Enter your address" id="floatingTextarea2"></textarea>
          </div>
          <div className="col-auto">
            <button className="btn btn-primary my-4 editButton">Edit</button>
          </div>
        </div>
        <div className="row mb-3 my-4 d-flex justify-content-center">
          <button className="btn btn-success saveChangesButton">Save Changes</button>
        </div>
      </div>
    </div>
  )
}

export default Editprofile;
