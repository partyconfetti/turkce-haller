const IYELIK = 'iyelik'
const iHALI = 'i'
const eHALI = 'e'
const deHALI = 'de'
const denHALI = 'den'
const iEKLERI = 'ııiiuuüü'

module.exports = (isim, hal, kesme = '’') => {
	if(!isim || !hal) return ''

	hal = hal.toLocaleLowerCase('tr')
	if(!['iyelik', 'i', 'e', 'de', 'den'].includes(hal)){
		console.log(new Error(`'Turkce-Haller: Invalid hal '${hal}'`))
		return ''
	}

	const sonHarf = isim[isim.length - 1]
	const istisna = ~~/[ei][^ıüoö]*[au]l$|alp$/.test(isim) * 2 // Sapkali harf istisnasi var mı kontrol eder Orn: Alp, Resul, Cemal... 0 veya 2 degeri doner
	const sonSesli = isim.match(/[aıeiouöü]/g).pop()

	// Ek in sesli harfine karar verir
	let ek = (hal === IYELIK || hal === iHALI) ?  // iyelik veya i hali ise
		// Son sesli harf aıeiouöü harflerinin hangisine denk geliyorsa o index numarasıyla iEKLERI nin n'inci elemanı seçilir
		iEKLERI[ 'aıeiouöü'.indexOf(sonSesli) + istisna ]
		: // e, de veya den hali ise
		// Son sesli harf a, ı, o veya u ise ek a (istisna var ise e ), e, i, ö veya ü ise ek e harfi
		(/[aıou]/.test(sonSesli)) ? istisna ? 'e' : 'a' : 'e';

	// Kaynastirma harflerini ekler
	if(sonHarf === sonSesli)
		ek = (hal === IYELIK) ? 'n' + ek : (hal === iHALI || hal === eHALI) ? 'y' + ek : ek

	// Harf yumusamalarini kontrol eder
	if(hal === deHALI || hal === denHALI)
		ek = (/[fstkçşhp]/.test(sonHarf) ? 't' : 'd') + ek

	// Iyelik veya den hali icin ek in sonuna n harfi ekler
	if(hal === IYELIK || hal === denHALI)
		ek += 'n'

	return `${isim}${kesme}${ek}`
}