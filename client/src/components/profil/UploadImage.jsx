import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { uploadPicture } from "../../actions/user.actions";

const UploadImage = () => {
const [loading, setLoading] = useState(false);
const [file, setFile] = useState();
const dispatch = useDispatch();
const userData = useSelector((state) => state.userReducer);

  const handlePicture = async (e) => {
    setLoading(!loading);
    e.preventDefault();
    const data = new FormData();
    data.append("name", userData.name);
    data.append("userId", userData._id);
    data.append("file", file);

    await dispatch(uploadPicture(data, userData._id));
    setLoading(!loading);
  };

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
        <Button disabled={loading} className="w-100" onClick={handlePicture}>Modifier</Button>
    </Form>
  );
};

export default UploadImage;
