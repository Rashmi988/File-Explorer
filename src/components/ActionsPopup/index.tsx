import React, {useEffect, useRef} from 'react';
import {ActionsPopupProps} from './model'
import './ActionsPopup.css'


const ActionsPopup: React.FC<ActionsPopupProps> = ({ onClose, onAction }) => {
    const menuRef = useRef<HTMLDivElement>(null);

    const handleOutsideClick = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        onClose(); 
      }
    };
  
    useEffect(() => {
      document.addEventListener('click', handleOutsideClick);
      return () => {
        document.removeEventListener('click', handleOutsideClick);
      };
    }, []);

  return (
    <div
      id='popup'
      onClick={onClose}
      ref={menuRef}
    >
      <div className="popup-item" onClick={() => onAction('copy')}>Copy</div>
      <div className="popup-item" onClick={() => onAction('delete')}>Delete</div>
      <div className="popup-item" onClick={() => onAction('rename')}>Rename</div>
    </div>
  );
};

export default ActionsPopup;
