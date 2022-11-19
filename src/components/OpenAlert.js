import { useState } from 'react';

import Alert from './Alert';

const OpenAlert = () => {
   const [isOpenedAlert, setOpenedAlert] = useState(false);

   const handleOpen = () => setOpenedAlert(true);

   const handleClose = () => setOpenedAlert(false);

   return (
      <>
        <button onClick={handleOpen}>Open alert</button>
        {isOpenedAlert && <Alert color="primary" onClose={handleClose}>Some text</Alert>}
      </>
   )
}

export default OpenAlert;
