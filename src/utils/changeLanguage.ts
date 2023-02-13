export const ChangeLanguage = (selectedLanguage: string) => {
	if (selectedLanguage == "en-US") {
		window.location.assign(`/`);
	} else {
		window.location.assign(`/${selectedLanguage}`);
	}
};
