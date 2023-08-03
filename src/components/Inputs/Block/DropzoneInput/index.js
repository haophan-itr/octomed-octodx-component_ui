import React, { useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import _ from 'lodash';

import { Upload, message, Progress } from 'antd';
import NormalButton from '../../../Buttons/NormalButton';
import RemoveIcon from '../../../../static/images/red-remove-icon.svg';
import './styles.scss';

const { Dragger } = Upload;

const DropzoneInput = (props) => {
  const [isEnter, setIsEnter] = useState(false);

  const onDragEnter = () => {
    if (!isEnter) {
      setIsEnter(true);
    }
  };

  const onDragLeave = () => {
    if (isEnter) {
      setIsEnter(false);
    }
  };

  const [fileList, setFileList] = useState([]);

  const onChange = (info) => {
    const { status } = info.file;
    setFileList(info.fileList);

    if (status === 'done') {
      message.success(`${info.file.name} file uploaded successfully.`);
    } else if (status === 'error') {
      message.error(`${info.file.name} file upload failed.`);
    }
  };

  const handleRemove = (fileId) => {
    const clonedFileList = [...fileList];
    _.remove(clonedFileList, item => item.uid === fileId);
    setFileList(clonedFileList);
  };

  const beforeUpload = () => false;

  return (
    <div className={classNames('dropzone-input-container', props.className)}>

      {props.multiple ? (
        <div>
          <Dragger
            name={props.name}
            multiple={props.multiple}
            action={props.action}
            onDrop={props.onDrop}
            onChange={onChange}
            beforeUpload={beforeUpload}
            showUploadList={false}
            fileList={fileList}
          >
            {
          isEnter
            ? (
              <div className="drop-enter" onDragLeave={onDragLeave}>
                <p className="line-1">Drop the file here</p>
                <p className="line-2">
                  Max file size
                  {' '}
                  {props.maxSize}
                  {' MB'}
                </p>
              </div>
            )
            : (
              <div className="drop-leave" onDragEnter={onDragEnter}>
                <p className="line-1">Drag & drop or click here to upload file</p>
                <p className="line-2">
                  Max file size
                  {' '}
                  {props.maxSize}
                  {' MB'}
                </p>
              </div>
            )
        }


          </Dragger>

          { fileList.length > 0 && (
          <div className="upload-list-box" style={{ marginTop: '10px' }}>
            {
                  fileList.map(file => (
                    <div className="upload-list-item">
                      {/* Done */}
                      {
                        file.status !== 'uploading' ? (
                          <div className="box-done">
                            <div className="file-content">
                              <div className="file-name">
                                {file.name}
                              </div>

                              <div className="file-size">
                                {file.size}
                                {' MB'}
                              </div>
                            </div>

                            <NormalButton
                              hasIcon
                              iconComponent={(
                                <img src={RemoveIcon} alt="Remove icon" />
                              )}
                              isMedium
                              className="remove-btn"
                              isTertiary
                              isNegative
                              onClick={() => handleRemove(file.uid)}
                            />
                          </div>
                        )
                          : (
                            // In process
                            <div className="box-uploading">
                              <div className="file-content">
                                <div className="above-content">
                                  <div className="left-box">
                                    <div className="file-name">
                                      {file.name}
                                    </div>

                                    <div className="dot" />

                                    <div className="file-size">
                                      {file.size}
                                      {' MB'}
                                    </div>
                                  </div>

                                  <div className="percent">
                                    {file.percent}
                                    {'%'}
                                  </div>
                                </div>

                                <Progress className="progess-bar" percent={file.percent} />
                              </div>

                              <NormalButton
                                hasIcon
                                iconComponent={(
                                  <img src={RemoveIcon} alt="Remove icon" />
                                )}
                                isMedium
                                className="remove-btn"
                                isTertiary
                                isNegative
                                onClick={() => handleRemove(file.uid)}
                              />
                            </div>
                          )
                      }
                    </div>
                  ))
                }
          </div>
          )}
        </div>
      ) : fileList.length === 0 ? (
        <Dragger
          name={props.name}
          multiple={props.multiple}
          action={props.action}
          onDrop={props.onDrop}
          onChange={onChange}
          beforeUpload={beforeUpload}
          showUploadList={false}
          fileList={fileList}
        >
          {
          isEnter
            ? (
              <div className="drop-enter" onDragLeave={onDragLeave}>
                <p className="line-1">Drop the file here</p>
                <p className="line-2">
                  Max file size
                  {' '}
                  {props.maxSize}
                  {'MB'}
                </p>
              </div>
            )
            : (
              <div className="drop-leave" onDragEnter={onDragEnter}>
                <p className="line-1">Drag & drop or click here to upload file</p>
                <p className="line-2">
                  Max file size
                  {' '}
                  {props.maxSize}
                  {'MB'}
                </p>
              </div>
            )
        }
        </Dragger>
      ) : fileList[0].status !== 'uploading'
        ? (
          <div className="upload-list-box" style={{ marginTop: '10px' }}>
            <div className="single-upload-box">
              <div className="box-done">
                <div className="file-content">
                  <div className="file-name">{fileList[0].name}</div>
                  <div className="file-size">
                    {fileList[0].size}
                    {'MB'}
                  </div>
                </div>

                <NormalButton
                  hasIcon
                  iconComponent={(
                    <img src={RemoveIcon} alt="Remove icon" />
                  )}
                  isMedium
                  className="remove-btn"
                  isTertiary
                  isNegative
                  onClick={() => handleRemove(fileList[0].uid)}
                />
              </div>

            </div>
          </div>
        ) : (
          <div className="upload-list-box">
            <div className="single-upload-box">
              <div className="box-uploading">
                <div className="above-box">
                  <div className="text-uploading">Uploading</div>
                  <NormalButton
                    buttonName="Cancel"
                    isMedium
                    className="cancel-btn"
                    isText
                    isNegative
                    onClick={() => handleRemove(fileList[0].uid)}
                  />
                </div>
                <Progress className="progress-bar-x" percent={fileList[0].percent} />
                <div className="below-box">
                  <div className="left-side">
                    <div className="file-name">{fileList[0].name}</div>
                    <div className="dot" />
                    <div className="file-size">
                      {fileList[0].size}
                      {'MB'}
                    </div>
                  </div>
                  <div className="percent">
                    {fileList[0].percent}
                    {'%'}
                  </div>
                </div>
              </div>
            </div>

          </div>
        )
      }
    </div>
  );
};

DropzoneInput.defaultProps = {
  maxSize: '1024',
  className: '',
  onDrop: () => { },
  name: '',
  multiple: false,
  action: '',
};

DropzoneInput.propTypes = {
  maxSize: PropTypes.string,
  className: PropTypes.string,
  onDrop: PropTypes.func,
  name: PropTypes.string,
  multiple: PropTypes.bool,
  action: PropTypes.string,
};

export default DropzoneInput;
