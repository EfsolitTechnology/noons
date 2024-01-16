
import React, { ReactNode } from 'react';

type Props = {

  children: ReactNode;

};
import { Inter } from 'next/font/google'

import './components/icon'





const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Dashboard',
  description: 'Admin Dashboard',
}


 const RootLayout: React.FC<Props>=({ children })=>{
  return (
    <html lang="en">
       {/* <Head>
       <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
            
                </Head> */}
      <body className={inter.className}>
           {children}
         </body>
      
    </html>
    
  )
}
export default  RootLayout;