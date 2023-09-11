import { EIconType } from '../enums/IconType.enum';

export interface ILink {

    text: string,
    url: string,
    icon: {
	type: EIconType,
	url?: string,
    }

}
