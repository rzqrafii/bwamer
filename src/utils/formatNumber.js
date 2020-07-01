// function untuk menambahkan separator seperti (, / .) pada angka ribuan/raturanribu dst.
export default (number) => {
	// Intl = International numbering dari id-ID adalah Indonesia
	const formatNumbering = new Intl.NumberFormat("id-ID");
	return formatNumbering.format(number);
};
