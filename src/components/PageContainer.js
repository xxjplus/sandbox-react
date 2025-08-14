import React from 'react';

function PageContainer({ children }) {
    return (
        <main className="page-container">
            <div className="page-content">
                {children}
            </div>
        </main>
    );
}

export default PageContainer;