const Copyright = () => {
	const StartYear = 2023;
	const CurrentYear = new Date().getFullYear();
	const CP =
		CurrentYear == StartYear ? StartYear : `${StartYear} - ${CurrentYear}`;
	return <>`${CP}`</>;
};

export default Copyright;
