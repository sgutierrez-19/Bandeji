import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import DistanceComponent from './1-distance/DistanceComponent';
import InstAndLocationComponent from './2-instandlocation/InstAndLocationComponent';
import YoutubeComponent from './3-youtube/YoutubeComponent';
import AdDescriptionComponent from './4-adDescription/AdDescriptionComponent';
import Container from '@material-ui/core/Container';

export default function SignUp() {
  let history = useHistory();

  const [step, setStep] = useState(1);

  const nextStep = () => {
    setStep(step + 1);
  };

  const prevStep = () => {
    setStep(step - 1);
  };

  const switchPage = () => {
    switch (step) {
      case 1:
        return <DistanceComponent nextStep={nextStep} />;
      case 2:
        return (
          <InstAndLocationComponent nextStep={nextStep} prevStep={prevStep} />
        );
      case 3:
        return <YoutubeComponent nextStep={nextStep} prevStep={prevStep} />;
      case 4:
        return (
          <AdDescriptionComponent nextStep={nextStep} prevStep={prevStep} />
        );
      case 5:
        history.push('/');
        break;
      default:
        history.push('/');
    }
  };

  return (
    <Container component='main' maxWidth='sm'>
      {switchPage()}
    </Container>
  );
}
