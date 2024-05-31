import { BiLogOut } from 'react-icons/bi';
import useLogout from '../../hooks/useLogout';

const LogOutButton = () => {
  const { logout } = useLogout();
  return (
    <div className='mt-auto'>
      <BiLogOut
        className='w-6 h-6 text-white cursor-pointer'
        onClick={logout}
      />
    </div>
  );
};

export default LogOutButton;

// Starter Code for LogOutButton.jsx

// import { BiLogOut } from 'react-icons/bi';

// const LogOutButton = () => {
//   return (
//     <div className='mt-auto'>
//       <BiLogOut className='w-6 h-6 text-white cursor-pointer' />
//     </div>
//   );
// };

// export default LogOutButton;
