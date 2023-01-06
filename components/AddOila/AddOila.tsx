import * as React from 'react';
import OilaForm from '../OilaForm/OilaForm';

interface addOilaProps {
  oilas;
}

const AddOilla = () => {
  return (
    <React.Fragment>
      <OilaForm oilaName={''} author={''} quantity={1} price={2} date={''} />
    </React.Fragment>
  );
};
export default AddOilla;
