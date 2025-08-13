import React, { useState, useEffect } from 'react';

function ShowHideTask() {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        console.log(visible ? 'Gizlət' : 'Göstər');
    }, [visible]);

    return (
        <>
            {visible && <h2>Göstər Gizlət Home Work</h2>}
            <button onClick={() => setVisible(true)} disabled={visible}>Göstər</button>
            <button onClick={() => setVisible(false)} disabled={!visible}>Gizlət</button>
        </>
    );
}

export default ShowHideTask;