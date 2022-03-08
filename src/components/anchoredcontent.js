import React from 'react'

export default function AnchoredContent(jsxElement, horizontalPos, verticalPos) {
    return (
        <div className={horizontalPos}>
            <div className={verticalPos}>
                {jsxElement}
            </div>
        </div>
    );
}