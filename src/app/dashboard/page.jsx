import Dashboard from '@/Components/Dashboard';
import React from 'react';


export const metadata = {
    title: 'Dashboard',
    description: "dashboard ",
    keywords:['example1','example2','example3']
  };

const page = () => {
    return (
        <div>
            <Dashboard></Dashboard>
        </div>
    );
};

export default page;