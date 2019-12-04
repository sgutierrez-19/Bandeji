import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import UserCreateComponent from './1-userCreate/UserCreateComponent';
import SoloOrBand from './2-soloOrBand/SoloOrBandComponent';
import CreateUserMemberComponent from './individual/1-createUserMember/CreateUserMemberComponent';
import BCreateUserMemberComponent from './band/2-createUserMember/CreateUserMemberComponent';
import AddMoreComponent from './band/3-addMore/AddMoreComponent';
import CreateBandMember from './band/4-createBandMember/CreateBandMember';
import BandCreateComponent from './band/1-bandCreate/BandCreateComponent';
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

  const doubleNextStep = () => {
    setStep(step + 2);
  };

  const doublePrevStep = () => {
    setStep(step - 2);
  };

  const switchPage = () => {
    switch (step) {
      case 1:
        return <UserCreateComponent nextStep={nextStep} />;
      case 2:
        return (
          <SoloOrBand
            nextStep={nextStep}
            doubleNextStep={doubleNextStep}
            prevStep={prevStep}
          />
        );
      case 3:
        return (
          <CreateUserMemberComponent
            doubleNextStep={doubleNextStep}
            prevStep={prevStep}
          />
        );
      case 4:
        return (
          <BandCreateComponent
            doubleNextStep={doubleNextStep}
            doublePrevStep={doublePrevStep}
          />
        );
      case 5:
        history.push('/');
        break;
      case 6:
        return (
          <BCreateUserMemberComponent
            nextStep={nextStep}
            doublePrevStep={doublePrevStep}
          />
        );
      case 7:
        return (
          <AddMoreComponent
            prevStep={prevStep}
            nextStep={nextStep}
            doubleNextStep={doubleNextStep}
          />
        );
      case 8:
        return <CreateBandMember prevStep={prevStep} />;
      case 9:
        history.push('/');
        break;
      default:
        history.push('/');
        break;
    }
  };

  return (
    <Container component='main' maxWidth='sm'>
      {switchPage()}
    </Container>
  );
}
