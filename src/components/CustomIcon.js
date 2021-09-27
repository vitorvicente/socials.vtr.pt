import React from "react";
import styled from "styled-components";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
  faAt,
  faStickyNote,
} from '@fortawesome/free-solid-svg-icons'
import {
  faYoutube,
  faTwitch,
  faTwitter,
  faFacebookF,
  faDiscord,
  faSteam,
  faInstagram,
  faSnapchat,
} from "@fortawesome/free-brands-svg-icons";

const StyledIcon = styled(FontAwesomeIcon)`
  color: #007bff;
  padding-top: 20px;
  padding-bottom: 20px;
  font-size: 120px;
`;

const CustomIcon = ({icon}) => {
	switch(icon) {
		case "youtube":
			return (<StyledIcon icon={faYoutube} />);
		case "twitch":
			return (<StyledIcon icon={faTwitch} />);
		case "twitter":
			return (<StyledIcon icon={faTwitter} />);
		case "facebook":
			return (<StyledIcon icon={faFacebookF} />);
		case "discord":
			return (<StyledIcon icon={faDiscord} />);
		case "steam":
			return (<StyledIcon icon={faSteam} />);
		case "instagram":
			return (<StyledIcon icon={faInstagram} />);
		case "snapchat":
			return (<StyledIcon icon={faSnapchat} />);
		case "email":
			return (<StyledIcon icon={faAt} />);
		default:
			return (<StyledIcon icon={faStickyNote} />);
	}
};

export default CustomIcon;