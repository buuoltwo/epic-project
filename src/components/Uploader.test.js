import React, { useRef } from "react";
import { observer } from 'mobx-react';
import useStores from '../stores'
import { message } from "antd";

const Component = observer(function() {
  
  const { ImgStore } = useStores();
  const ref = useRef();
  const bind1 = (e) => {
    e.preventDefault();
    console.log(ref.current.files);
    // console.log(ref.current.files.name);
    console.log(ref.current.files[0].name);
    if(ref.current.files.length > 0) {
      // ImgStore.setFilename(ref.current.files.name);
      ImgStore.setFilename(ref.current.files[0].name);
      ImgStore.setFile(ref.current.files);
      ImgStore.setFile(ref.current.files[0]);
      ImgStore.add()
        .then((serverfile) => {
          console.log("上传成功");
          message.success("上传成功");
        }).catch(err => {
          console.log("上传失败");
          console.log(err);
          message.error("上传失败");
        })
    }
    
  }
  return <input type="file" ref={ref} onChange={bind1}/>;
});

export default Component;