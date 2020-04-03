import React, { useRef } from 'react';
import { AiOutlineHome, AiOutlineReconciliation, AiOutlineMail } from 'react-icons/ai';
import { IoIosMenu } from 'react-icons/io';
import './menu.scss';
import { setActiveAction } from '../../redux/reducers/menu';
import { connect } from 'react-redux';

const iconSize = 25;

const menuItems = [
  { name: 'about-me', icon: <AiOutlineHome size={iconSize} /> },
  { name: 'resume', icon: <AiOutlineReconciliation size={iconSize} /> },
  { name: 'contacts', icon: <AiOutlineMail size={iconSize} /> },
];

const Menu = ({ active, setActive }) => {
  const containerRef = useRef(null);

  const setClassName = (className) => {
    return className === active ? `menu-item active ${className}` : `menu-item ${className}`;
  };

  const onMenu = (className) => () => {
    setActive(className);
    onMobile();
  };

  const onMobile = () => {
    containerRef.current.classList.toggle('open');
  };

  return (
    <>
      <div onClick={onMobile} className="mobile-menu">
        <IoIosMenu />
      </div>

      <div ref={containerRef} className="menu shadowed">
        {menuItems.map(({ name, icon }) => {
          return (
            <a key={name} onClick={onMenu(name)} className={setClassName(name)}>
              {icon}
            </a>
          );
        })}
      </div>
    </>
  );
};

const mapStateToProps = (state) => ({
  active: state.menuReducer.active,
});

const mapDispatchToProps = {
  setActive: setActiveAction,
};

export default connect(mapStateToProps, mapDispatchToProps)(Menu);
