import ISO6391 from "iso-639-1";
import { ChangeLanguage } from "@utils/changeLanguage";
import { hasFlag } from "country-flag-icons";
import { US, NL, FR, ES, DE } from "country-flag-icons/react/3x2";

const LanguageSelectbox = (props: {
	showFlag: boolean;
	langsAvailable: any;
	currentLang: string;
}) => {
	let defaultVal = "en";

	if (props.currentLang && props.currentLang !== defaultVal) {
		defaultVal = props.currentLang;
	}

	const handleLangChange = (langCode: string) => {
		ChangeLanguage(langCode);
	};

	const ShowFlag = (props: { langCode: string }) => {
		let currentFlag = <></>;
		switch (props.langCode) {
			case "en": {
				currentFlag = <US className="w-6 h-6" />;
				break;
			}
			case "nl": {
				currentFlag = <NL className="w-6 h-6" />;
				break;
			}
			case "de": {
				currentFlag = <DE className="w-6 h-6" />;
				break;
			}
			case "es": {
				currentFlag = <ES className="w-6 h-6" />;
				break;
			}
			case "fr": {
				currentFlag = <FR className="w-6 h-6" />;
				break;
			}
		}
		return currentFlag;
	};

	//console.log(props.currentLang);

	return (
		<div className="dropdown dropdown-bottom dropdown-end dropdown-hover">
			<label tabIndex={0} className="btn m-1">
				<ShowFlag langCode={defaultVal} />
			</label>
			<ul
				tabIndex={0}
				className="dropdown-content p-2 shadow bg-base-100 rounded-box w-full"
			>
				{props.langsAvailable.map((current: string) => {
					const langCode = current;

					if (current == defaultVal) {
						return;
					}

					return (
						<li
							key={langCode.toString()}
							onClick={() => handleLangChange(current)}
							className="flag-dropdown-item cursor-pointer"
						>
							<ShowFlag langCode={langCode} />
						</li>
					);
				})}
			</ul>
		</div>
	);
};

export default LanguageSelectbox;
