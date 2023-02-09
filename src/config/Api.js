import React from "react";
import axios from "axios";

const read_token = "f6007794e64659c42cdaf9c440292586a3764e69";

export const blogList = async () => {
  const url = `
  https://api.buttercms.com/v2/posts?auth_token=${read_token}`;
  return axios.get(url).then((res) => {
    return res.data.data;
    // console.log(res.data.data);
  });
};

