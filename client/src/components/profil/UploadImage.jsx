import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { uploadPicture } from "../../actions/user.actions";
import InfoDemo from "../files/guestFiles/InfoDemo";


const UploadImage = () => {
const [loading, setLoading] = useState(false);
const [file, setFile] = useState();
const dispatch = useDispatch();
const userReducer = useSelector((state) => state.userReducer);
  // Ready for reel Version
  // const handlePicture = (e) => {
  //   setLoading(!loading);
  //   e.preventDefault();
  //   const data = new FormData();
  //   data.append("name", userReducer.name);
  //   data.append("userId", userReducer._id);
  //   data.append("file", file);
  //   dispatch(uploadPicture(data, userReducer._id));
  //   setLoading(!loading);
  //   // window.location.reload();
  // };

  return (
    <Form>
      <Form.Control
        type="file"
        id="file"
        name="file"
        accept=".jpg, .jpeg, .png"
        style={{"marginBottom":"10px"}}
        onChange={(e) => setFile(e.target.files[0])}
      />
        <InfoDemo photoUser={true} />
        {/* <Button disabled={loading} className="w-100" onClick={handlePicture}>Modifier</Button> */}
    </Form>
  );
};

export default UploadImage;
