import icon from '../../assets/img/notfication-icon.svg';

import './styles.css';

function NotficationButton() {
    return (
        <div className="dsmeta-red-btn">
            <img src={icon} alt="Notificar" />
        </div>
    )
}

export default NotficationButton;