import React from 'react';

const UnRegisteredData = ({formList}) => {
    return (
        <div>
            {
                formList.map(data => (
                    <div key={data.key}>
<h2>
    {data.name}
</h2>
                    </div>
                ))
            }
        </div>
    );
};

export default UnRegisteredData;