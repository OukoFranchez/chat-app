import Sidebar from '../../components/sidebar/Sidebar';

const Chat = () => {
  return (
    <div className='flex sm:h-[450] md:h-[550] rounded-lg overflow-hidden bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
      <Sidebar />
    </div>
  );
};

export default Chat;
