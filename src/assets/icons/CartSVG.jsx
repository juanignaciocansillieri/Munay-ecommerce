import * as React from 'react';
import { useCartContext } from '../../provider/CartContext.jsx';

const Logo = ({ ...props }) => {
  const { cartItems } = useCartContext();
  const quantity = cartItems.length;
  return (

    <div className='relative mt-0.5'>
      <div className='absolute  right-[-8px] top-[-6px]'>
        <span className='flex items-center justify-center rounded-full bg-[#bdcf23] w-[15px] h-[15px] p-2 text-center text-xs font-bold'>{quantity}</span>
      </div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        data-name="Capa 2"
        viewBox="0 0 30 30.77"
        {...props}
      >
        <path
          d="M9.29 30.77c-.77 0-1.42-.27-1.96-.82-.54-.55-.81-1.2-.81-1.97s.27-1.42.82-1.96c.55-.54 1.2-.81 1.97-.81s1.42.27 1.96.82c.54.55.81 1.2.81 1.97s-.27 1.42-.82 1.96c-.55.54-1.2.81-1.97.81Zm14.9 0c-.77 0-1.42-.27-1.96-.82-.54-.55-.81-1.2-.81-1.97s.27-1.42.82-1.96 1.2-.81 1.97-.81 1.42.27 1.96.82c.54.55.81 1.2.81 1.97s-.27 1.42-.82 1.96c-.55.54-1.2.81-1.97.81ZM8.5 6.34l3.17 6.63h10.34l3.59-6.63H8.5ZM6.48 2.88h20.96c.95 0 1.68.42 2.17 1.26.5.84.51 1.69.04 2.56l-4.49 8.16c-.33.55-.75.99-1.26 1.33s-1.09.51-1.74.51H10.95l-1.68 3.17h18.09v3.17H9.03c-1.29 0-2.22-.48-2.8-1.43-.58-.95-.57-1.95.02-2.99l2.14-3.89L3.1 3.46H0V0h5.13l1.36 2.88Zm5.1 10.37h10.51-10.51Z"
          data-name="Capa 1"
          className='fill-black dark:fill-white'
        />

      </svg>
    </div>
  );
};
export default Logo;
