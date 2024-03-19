import React from 'react'
import Modal from 'react-modal';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor : 'black',
    padding : '10px',
    color : 'white'
  },
};

const EventCard = (props) => {

  let subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = '#000000';
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div className='rounded-xl w-[250px] event-card h-fit'>
        <img src={props.item.img} alt="event-img" className='w-full rounded-xl' />
        <div className='px-2 md:py-4 py-2 text-center'>
        <p className='md:text-xl text-lg font-semibold my-0 leading-none'>{props.item.title}</p>
        <p className='mt-1 md:mb-3 mb-2'>{props.item.date} | {props.item.time}</p>
        <button className='bg-white hover:scale-95 transition-all duration-300 ease-in-out rounded-full text-black px-6 py-1' onClick={openModal}>View Location</button>
        </div>

        <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <button onClick={closeModal} className='absolute top-1 right-1 md:right-3 font-sans'>X</button>
        <div className='max-w-[700px] m-2 md:m-4'>
          <img src={props.item.venue} alt="" className='w-full' />
        </div>
      </Modal>
    </div>
  )
}

export default EventCard