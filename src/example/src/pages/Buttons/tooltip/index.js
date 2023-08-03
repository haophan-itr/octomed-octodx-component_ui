import React from 'react';
import TooltipComponent from '../../../componentUI/components/tooltip';
import NormalButton from '../../../componentUI/components/Buttons/NormalButton';


import './styles.scss';

const TooltipContent = (props) => {
  const ABC = 0;
  return (
    <div className="container-tooltip">
      <div className="content-1">
        <TooltipComponent
          placement="topLeft"
          children={<NormalButton isFilled isPrimary1 isSmall buttonName="TL" />}
        />
        <TooltipComponent
          placement="top"
          children={<NormalButton isFilled isPrimary1 isSmall buttonName="Top" />}
        />
        <TooltipComponent
          placement="topRight"
          children={<NormalButton isFilled isPrimary1 isSmall buttonName="TR" />}
        />
      </div>
      <div className="content-2">
        <TooltipComponent
          placement="leftTop"
          children={<NormalButton isFilled isPrimary1 isSmall buttonName="LT" />}
        />
        <TooltipComponent
          placement="rightTop"
          children={<NormalButton isFilled isPrimary1 isSmall buttonName="RT" />}
        />
      </div>
      <div className="content-3">
        <TooltipComponent
          placement="left"
          children={<NormalButton isFilled isPrimary1 isSmall buttonName="Left" />}
        />
        <TooltipComponent
          placement="right"
          children={<NormalButton isFilled isPrimary1 isSmall buttonName="Right" />}
        />
      </div>
      <div className="content-4">
        <TooltipComponent
          placement="leftBottom"
          children={<NormalButton isFilled isPrimary1 isSmall buttonName="LB" />}
        />
        <TooltipComponent
          placement="rightBottom"
          children={<NormalButton isFilled isPrimary1 isSmall buttonName="RB" />}
        />
      </div>
      <div className="content-5">
        <TooltipComponent
          placement="bottomLeft"
          children={<NormalButton isFilled isPrimary1 isSmall buttonName="BL" />}
        />
        <TooltipComponent
          placement="bottom"
          children={<NormalButton isFilled isPrimary1 isSmall buttonName="Bottom" />}
        />
        <TooltipComponent
          placement="bottomRight"
          children={<NormalButton isFilled isPrimary1 isSmall buttonName="BR" />}
        />
      </div>
    </div>
  );
};

export default TooltipContent;
