import { FaArrowRight, FaArrowLeft } from 'react-icons/fa';

const NextArrow = (props) => {
    const { className, style, onClick } = props;
    return (
        <div className={className} onClick={onClick} style={{ ...style, display: 'block', right: '25px' }}>
            <FaArrowRight style={{ color: 'black', fontSize: '24px',hover:{transform: 'scale(1.1)'} }} />
        </div>
    );
};

const PrevArrow = (props) => {
    const { className, style, onClick } = props;
    return (
        <div className={className} onClick={onClick} style={{ ...style, display: 'block', left: '25px' }}>
            <FaArrowLeft style={{ color: 'black', fontSize: '24px' }} />
        </div>
    );
};

export { NextArrow, PrevArrow };
