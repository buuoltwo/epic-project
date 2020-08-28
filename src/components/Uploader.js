import React from "react";
import { observer } from 'mobx-react';
import useStores from '../stores'
import { Upload, message, Button } from 'antd';
import { InboxOutlined } from '@ant-design/icons';
import styled from 'styled-components';

const { Dragger } = Upload;
const Div = styled.div`
  box-shadow: 0 0 2px 0;
  margin: 1em auto;
  text-align: center;
  padding: 30px;
  // max-width: 750px;
  border-radius: 3px;
`;

const Component = observer(function () {
  const { ImgStore, UserStore } = useStores();
  const props = {
    // https://ant.design/components/upload-cn/#components-upload-demo-upload-manually
    beforeUpload: function (file) {
      // console.log(file);
      if (!/(.gif$)|(.png$)|(.jpg$)|(.jpeg$)|(.svg$)/.test(file.name)) {
        message.error("上传的格式为.gif | .png | .jpg | .jpeg | .svg");
        return false;
      }
      else if (!UserStore.currentUser) {
        message.error("请先登录再进行操作");
        return false;
      }
      else if (file.size > 1024 * 1024) {
        message.error("上传图片大小不超过1M");
        return false;
      }
      else {
        ImgStore.setFilename(file.name);
        ImgStore.setFile(file);
        ImgStore.add()
          .then((serverfile) => {
            console.log("上传成功");
            message.success("上传成功");
          }).catch(err => {
            console.log("上传失败");
            console.log(err);
            message.error("上传失败");
          })
        return false;
      }
    },
    // onRemove: function(){
    //   console.log("well..");
    //   return false;
    // }
    // https://ant.design/components/upload-cn/#API
    showUploadList: false
  };
  return (
    <>
      <Dragger {...props}>
        <p className="ant-upload-drag-icon">
          <InboxOutlined />
        </p>
        <p className="ant-upload-text">Click or drag file to this area to upload</p>
        <p className="ant-upload-hint">
          Support for a single or bulk upload. Strictly prohibit from uploading company data or other
          band files
    </p>
      </Dragger>
      {
        ImgStore.serverfile ? <Div>
          <h2>上传结果</h2>
          <dl>
            <dt>图片链接</dt>
            {/* 控制台输入stores慢慢找 */}
            <dd><Button target="_blank" href={ImgStore.serverfile.attributes.image.attributes.url}>{ImgStore.serverfile.attributes.image.attributes.url}</Button></dd>
            <dt>缩略图</dt>
      <dd><img alt="缩略图" src={ImgStore.serverfile.attributes.image.attributes.url} style={{width:"45%"}}></img></dd>
          </dl>
        </Div> : null

      }
    </>
  )
});

export default Component;