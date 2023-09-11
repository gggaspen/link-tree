import React from 'react';
import classes from './Link.module.css';
import { ILink } from '../../models/Link.interface';
import { EIconType } from '../../enums/IconType.enum';

const Link = ({ text, url, icon }: ILink) => {

    const goToLinkHandler = () => {
	window.open(url);
    }

    const getIcon = () => {
	switch (icon.type) {
	    case EIconType.YOU_TUBE: return 'https://imgs.search.brave.com/wPCU-Q66Rjaxl0L9P7t_HAro4ITBVomvVcpbqXroVzM/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9hc3Nl/dHMuc3RpY2twbmcu/Y29tL2ltYWdlcy81/ODBiNTdmY2Q5OTk2/ZTI0YmM0M2M1NDUu/cG5n';
	    case EIconType.SOUNDCLOUD: return 'https://imgs.search.brave.com/AnpVMpyMLR3mCF_2Qq5oWFimjfDh9AShJBqAGCLMFFQ/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9hc3Nl/dHMuc3RpY2twbmcu/Y29tL2ltYWdlcy81/OGFmMDQ0NDZjMjUy/NDk5MjgxYWU5MWYu/cG5n';
	    case EIconType.INSTAGRAM: return ''; 
	}
    }

    return (
    <>
	<div 
	    className={ classes.linkContainer } 
	    onClick={ () => goToLinkHandler() }
	>
	    <figure>
		<img src={ getIcon() } />
	    </figure>
	    <section className={ classes.nameSection }>
 		<span>
		    { text.toUpperCase()  } 
		</span>    
	    </section>
	    {/*<div>
		<span>
		    + 
		</span>    
	    </div>*/}

	</div>
    </>);
};

export default Link;
