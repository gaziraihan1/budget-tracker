import React, { useState } from 'react';
import { Link } from 'react-router';
import Button from '../../Components/Shared/TrackingButton/Button';
import ClassSchedule from '../../Components/TrackPageContent/ClassSchedule';
import BudgetTracker from '../../Components/TrackPageContent/BudgetTracker';
import QAGenerator from '../../Components/TrackPageContent/QAGenerator';
import StudyPlanner from '../../Components/TrackPageContent/StudyPlanner';

const Tracking = () => {
    const [activeButton, setActiveButton] = useState('classSchedule');
    const buttons =[
        {toolName: 'classSchedule', buttonName: 'Class Schedule'},
        {toolName: 'trackBudget', buttonName: 'Track Budget'},
        {toolName: 'qaGenerator', buttonName: 'Exam Q/A Generator'},
        {toolName: 'studyPlanner', buttonName: 'Study Planner'}
    ]
    
    return (
        <div className='w-full p-4 lg:p-0 lg:w-11/12 2xl:w-10/12 mx-auto'>
            <h1 className='mt-2 text-2xl font-bold text-center'>
                Hey dear, i wish you a very cool day.
            </h1>
            <p className='py-2 text-center font-thin text-sm '>
                Here you can use all tools and save your data, but if you want to save your data in your account then you must need <Link to={'/register'} className='underline text-blue-600'>register</Link> to create an account.
            </p>
            <div className='mx-auto w-full flex flex-wrap items-center justify-center gap-4 py-4 border-b-1 border-gray-200'>
                {
                    buttons.map(btn => (
                        <Button
                        key={btn.toolName}
                        toolName={btn.toolName}
                        buttonName={btn.buttonName}
                        activeButton={activeButton}
                        setActiveButton={setActiveButton}
                        />
                    ))
                }
            </div>
            <div>
                {
                    activeButton === 'classSchedule' && <ClassSchedule />
                }
                {
                    activeButton === 'trackBudget' && <BudgetTracker />
                }
                {
                    activeButton === "qaGenerator" && <QAGenerator />
                }
                {
                    activeButton === 'studyPlanner' && <StudyPlanner />
                }
            </div>
        </div>
    );
};

export default Tracking;