import React from 'react';
import { Divider, PageHeader } from 'antd';
import DropzoneInput from '../../componentUI/components/Inputs/Block/DropzoneInput';
import './styles.scss';

const Dropzone = props => (
  <div className="container-dropzone">
    <PageHeader
      title="DROPZONE"
      subTitle="component"
      className="title-header-dropzone"
    />
    <Divider />
    <DropzoneInput />
    {/* <Divider />
    <DropzoneInput multiple /> */}
  </div>
);

export default Dropzone;
