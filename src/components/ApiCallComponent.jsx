import React, { useEffect, useState } from "react";
import axios from "axios";

const ApiCallComponent = () => {
  console.log("render");
  const [data, setData] = useState("");
  useEffect(() => {
    axios
      .get("http://localhost:4500/posts")
      .then((response) => {
        console.log(response.data);
        setData(response.data);
      })
      .catch(function (error) {
        // обробка помилки
        console.log(error);
      });
  }, []);

  return <div>{data.title}</div>;
};

export default ApiCallComponent;
