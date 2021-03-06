/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import selectRandom from '../../../utils/selectRandom';

const Colors = ['red', 'yellow', 'blue', 'green'];

function TabButton({ currentTab, setCurrentTab, tabName, tabSelector }) {
  // Generate random color
  const selectedColor = selectRandom(Colors);

  return (
    <div
      className={`w-32 h-full border-r-2 flex flex-col items-center justify-end hover:bg-gray-100 cursor-pointer outline-none 
        ${currentTab === 'country-list' && 'rounded-tl-lg'} 
        ${currentTab === tabSelector && `bg-${selectedColor}-200`}
      `}
      role="tab"
      tabIndex="0"
      onClick={() => setCurrentTab(tabSelector)}
    >
      <span className="h-10 flex flex-col justify-center">{tabName}</span>
      <div className={`h-1 w-full bg-${selectedColor}-500`}> </div>
    </div>
  );
}

export default TabButton;
