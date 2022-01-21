import React, {useState, useEffect} from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

import { withFirebase } from "vtr-react-components/dist/Firebase";
import { VtrHeader } from "vtr-react-components/dist/VtrHeader";
import { VtrFooter } from "vtr-react-components/dist/VtrFooter";

import { getDoc } from "firebase/firestore";

import Card from "../components/Card";
import CustomIcon from "../components/CustomIcon";


const LandingBase = ({ firebase }) => {
	const [socials, setSocials] = useState([]);

	useEffect(() => {
		async function loadData() {
			const socialsDoc = await getDoc(firebase.config("socials"));

			if (socialsDoc.exists) {
				setSocials(socialsDoc.data()["public"]);
			}
		}
		
		loadData();
	}, [firebase]);
	
	const SocialCards = () => socials.map((item, index) => {
		const Icon = <CustomIcon icon={item.icon} />
			
		return (
			<Card key={index} icon={Icon} link={item.url} title={item.name} />
		);
	});

	return (
		<>
			<VtrHeader />
		
			<Container style={{minHeight: "50vh"}}>
				<Row lg={2} md={2} sm={1} xl={2} xs={1}>
					<SocialCards />
				</Row>
			</Container>

			<VtrFooter />
		</>
	);
};

const Landing = withFirebase(LandingBase);

export default Landing;
