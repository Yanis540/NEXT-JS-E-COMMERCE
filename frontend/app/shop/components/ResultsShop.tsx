import React from 'react';

interface ResultsShopProps {

};

function ResultsShop({}:ResultsShopProps) {
    return (
        <div className="flex-1 border border-blue-500 overflow-y-scroll scrollbar-hide">
           ResultsShop
           {
            Array.from({length:50}).map((_,i)=>(
                <h1 key={i}>Hello</h1>
            ))
           }
        </div>
    );
};

export default ResultsShop;