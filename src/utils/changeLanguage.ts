export const ChangeLanguage = (selectedLanguage: string) => {
	if (selectedLanguage == "en") {
		window.location.assign(`/`);
	} else {
		window.location.assign(`/${selectedLanguage}`);
	}
};
