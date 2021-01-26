import React from 'react';

import { Wrapper, Example } from '../../components';

const demos = [
  {
    js: require('../../utils/demos/steppers/HorizontalLinearAlternativeLabelStepper').default,
    title: 'Horizontal Linear Alternative Label Stepper',
    docs: 'https://material-ui.com/api/stepper/'
  },
  
]

const Steppers = () => (
  <Wrapper>
    {demos.map((demo, index) => (
      <Example
        key={index}
        index={index}
        title={demo.title}
        js={demo.js}
        docs={demo.docs}
      />
    ))}
  </Wrapper>
);

export default Steppers;
