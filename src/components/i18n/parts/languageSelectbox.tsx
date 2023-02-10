import i18next from "i18next";

import { localizePath } from "astro-i18next";
import ISO6991 from "iso-639-1";

const supportedLanguages = i18next.languages;
const currentLanguage = i18next.language;

const LanguageSelectbox = (props: {
	pathname: string;
	showFlag: boolean;
	attributes: any;
}) => {
	let attrs = [];
	if (props.attributes !== undefined) {
		attrs = props.attributes;
	}

	return (
		<select
			onChange={(e) => {
				window.location.assign(`/${e.currentTarget.value}`);
			}}
			{...attrs}
		>
			{supportedLanguages.map((supportedLanguage: string) => {
				let value = localizePath(props.pathname, supportedLanguage);
				const nativeName = ISO6991.getNativeName(supportedLanguage);
				const label = nativeName;

				return (
					<option
						value={value}
						selected={supportedLanguage === currentLanguage}
					>
						{label}
					</option>
				);
			})}
		</select>
	);
};

export default LanguageSelectbox;
