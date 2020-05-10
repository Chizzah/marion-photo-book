import React, {useState} from 'react';
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';


import './layout.css';

const MyModal = () => {
  const [open, setOpen] = useState(true)
  
  return (
    <>
      <Modal
        open={open}
        onClose={() => setOpen(false)}
        center
        classNames={{
          animationIn: 'customEnterAnimation',
          animationOut: 'customLeaveAnimation',
        }}
        animationDuration={600}
      >
        <section>
          <h1>Happy Mother's Day, <span className="heart-color">&hearts;</span> Marion <span className="heart-color">&hearts;</span></h1>
          <p>I want to thank you with this small token of my appreciation for being the most amazing mother, wife and friend any man could hope for. We love you. Happy Mother's Day from Cloud and I!</p>
          <h2>What is on this website?</h2>
          <p>This website contains some of our wedding photos. Visitors can scroll down and more images will load into view. If you click on an image you will be able to get a better view and be able to navigate through the gallery. <br/><br/> For a more cinematic experience you can use the fullscreen feature on the bottom right of the screen next to the download button. Also, please feel free to download any image you like whether you are on it or not.</p>
          <h3>Special Thanks</h3>
          <p>A special thanks to all our family and friends that joined us on our wedding day. For visitors who wish to find out who the wedding planners and photographer was, can find a link to their websites in the footer. Just keep scrolling and you'll get there lol</p>
        </section>
      </Modal>
    </>
  )
}

export default MyModal