import React, { useEffect, useState } from 'react';
import db from './firebase';
import axios from 'axios';
import { CSSProperties } from 'react';
import classes from './Home.module.css';
import Link from '../../components/Link/Link';
import { ILink } from '../../models/Link.interface';
import { EIconType } from '../../enums/IconType.enum'

const Home = () => {

    const [links setLinks] = useState([]);
    const API = 'https://retoolapi.dev/xEoIVB/links'

    useEffect(() => {
	axios.get(API)
	    .then((response) => {
		console.log(response);
	    })
	    .catch((error) => {
		console.log(error);
	    })
	    .finally(() => {
	    });
    }, []);
   /*
    const links: ILink[] = [
	{
	text: 'youtube',
	    url: 'http://youtube.com',
	    icon: {
		type: EIconType.YOU_TUBE,
	    }
	},
	{
	    text: 'soundcloud',
	    url: 'http://soundcloud.com',
	    icon: {
		type: EIconType.SOUNDCLOUD,
	    }
	}
    ];*/

    return (<>
        <main>
	    <header>
		g-linktree.web.app	
	    </header>
	    <section className={classes.linksContainer}>
	    { links ?
		links.map(({ text, url, icon }, i) => {
		    return (
			<Link
			    key={ i }
			    text={ text }
			    url={ url }
			    icon={ icon }
			/>
		    );
	    	}) : null
	    }
	    </section>
	    <footer>
		:w
	    </footer> 
	</main>
    </>);
};

export default Home;


