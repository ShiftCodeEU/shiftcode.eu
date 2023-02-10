import ISO6391 from "iso-639-1";

const LanguageSelectbox = (props: {
	showFlag: boolean;
	langsAvailable: any;
	currentLang: string;
}) => {
	const pathname = window.location.pathname;
	let defaultVal = "en";

	if (props.currentLang && props.currentLang !== defaultVal) {
		defaultVal = props.currentLang;
	}

	const handleLangChange = () => {
		//e: React.ChangeEvent
		var Dropdown = document.getElementById(
			"langSwitch"
		) as HTMLSelectElement;
		console.log(Dropdown, pathname);
		//window.location.assign(`/${e.currentTarget}`);
	};

	//console.log(props.currentLang);

	return (
		<select
			id="langSwitch"
			onChange={handleLangChange}
			defaultValue={defaultVal}
		>
			{props.langsAvailable.map((current: string) => {
				const langCode = current;
				const label = ISO6391.getName(current);

				return (
					<option
						key={langCode.toString()}
						value={langCode}
						defaultValue={defaultVal}
					>
						{label}
					</option>
				);
			})}
		</select>
	);
};

export default LanguageSelectbox;
