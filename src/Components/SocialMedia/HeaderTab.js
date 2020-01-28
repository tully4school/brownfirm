import React from 'react';
import './HeaderTab.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
library.add(fab, faTwitter)
function HeaderTab(props) {
    return (
        <a href={props.sml} target="new" className="header-tab align-items-center">
            <FontAwesomeIcon icon={['fab', props.social]} />
        </a>
    )
}

export default HeaderTab