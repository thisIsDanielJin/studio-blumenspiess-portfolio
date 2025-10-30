import React from 'react';

interface CutoutSVGProps {
    onClick: (e: React.MouseEvent) => void;
    className?: string;
}

export const CutoutSVG: React.FC<CutoutSVGProps> = ({ onClick, className }) => {
    return (
        <div 
            className={className}
            onClick={onClick}
            style={{ 
                position: 'absolute',
                width: '100%',
                height: '100%',
                pointerEvents: 'none'
            }}
        >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 595.2 841.92"
                style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    pointerEvents: 'auto',
                    cursor: 'pointer'
                }}
            >
                <image
                    href="/img/Cut_Schwarz.svg"
                    width="100%"
                    height="100%"
                    style={{
                        pointerEvents: 'visiblePainted'
                    }}
                />
            </svg>
        </div>
    );
};
