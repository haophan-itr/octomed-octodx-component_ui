import React, { useRef } from 'react';
import { useMergeState } from '../../../utils/customHooks';
import StepsComponent from '../../../componentUI/components/StepsComponent';

import './styles.scss';

const CSteps = () => {
  const stepTitles = useRef([
    {
      id: 0,
      name: 'Patient information',
    },
    {
      id: 1,
      name: 'Patient contact',
    },
    {
      id: 2,
      name: 'Study information',
    },
    {
      id: 3,
      name: 'Diagnosis',
    },
    {
      id: 4,
      name: 'Verify ECG signal',
    },
  ]);
  const [state, setState] = useMergeState({
    step: 1,
    stepTitlesCurrent: stepTitles.current,
  });

  return (
    <div className="container-step">
      <h1>Steps (Large)</h1>
      <StepsComponent isLargeStep step={state.step + 1} titles={state.stepTitlesCurrent} />
      <h1>Steps (Small)</h1>
      <StepsComponent step={state.step + 1} titles={state.stepTitlesCurrent} />
    </div>
  );
};

export default CSteps;
