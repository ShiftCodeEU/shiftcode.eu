import { ChangeLanguage } from "@utils/changeLanguage";
import { US, NL, FR, ES, DE } from "country-flag-icons/react/3x2";

const LanguageSelectbox = (props: {
	showFlag: boolean;
	langsAvailable: any;
	currentLang: string;
}) => {
	let defaultVal = "en-US";

	if (props.currentLang && props.currentLang !== defaultVal) {
		defaultVal = props.currentLang;
	}

	const handleLangChange = (langCode: string) => {
		ChangeLanguage(langCode);
	};

	if (typeof window !== "undefined") {
		if (/^en\b/.test(navigator.language)) {
			const lastLangSelection = localStorage.getItem("lastLang");
			const isAvailable =
				Array.from(props.langsAvailable).findIndex(
					(current) => current == window.navigator.language
				) == -1
					? false
					: true;

			if (isAvailable == true) {
				if (lastLangSelection !== window.navigator.language) {
					localStorage.setItem("lastLang", window.navigator.language);
					handleLangChange(window.navigator.language);
				}
			}
		}
	}

	const ShowFlag = (props: { langCode: string }) => {
		let currentFlag = <></>;
		switch (props.langCode) {
			case "en-US": {
				currentFlag = <US className="w-6 h-6" />;
				break;
			}
			case "nl-NL": {
				currentFlag = <NL className="w-6 h-6" />;
				break;
			}
			case "de-DE": {
				currentFlag = <DE className="w-6 h-6" />;
				break;
			}
			case "es-ES": {
				currentFlag = <ES className="w-6 h-6" />;
				break;
			}
			case "fr-FR": {
				currentFlag = <FR className="w-6 h-6" />;
				break;
			}
		}
		return currentFlag;
	};

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
