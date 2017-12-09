var blad1= '';
var blad2= '';
var blad3= '';
var blad4= '';
var blad5= '';
var blad6= '';
var blad7= '';
var powitanie = '';


function printWynik (id, tekst) {
	document.getElementById(id).innerHTML = tekst;
}

function sprawdzTekst (element, idOut) {
	var value = element.value;
	powitanie = value;
	if (value.length < 1) 
		{
			printWynik(idOut, "*Wprowadz tekst!");
			blad1 = 'Nie podano imienia! ';
			document.getElementById('kolor1').style.border = '3px red solid';

		
		}
	else
	{
	 printWynik(idOut, "");
	 document.getElementById('kolor1').style.border = '3px green solid';

	}
}

function sprawdzTekst2 (element, idOut) {
	var value = element.value;
	if (value.length < 1) 
		{
			printWynik(idOut, "*Wprowadz tekst!");
			document.getElementById('kolor2').style.border = '3px red solid';
			blad2 = 'Nie podano nazwiska! ';
		}
	else
	{
	 printWynik(idOut, "");
	 document.getElementById('kolor2').style.border = '3px green solid';
	}
}

function sprawdzEmail (element, idOut) {
	var value = element.value;
	var regExp = new RegExp('^([A-Za-z0-9_\\-\\.])+\@([A-Za-z0-9_\\-\\.])+\.([A-Za-z]{2,4})$');
	if (!regExp.test(value)) 
	{
		printWynik(idOut, '*Niepoprawny email!');
		document.getElementById('kolor3').style.border = '3px red solid';
		blad3 = 'Format adresu e-mail jest niepoprawny! ';
	}
	else
	{
	 printWynik(idOut, "");
	 document.getElementById('kolor3').style.border = '3px green solid';
	}
}

function sprawdzDate (element, idOut) {
	var value = element.value;
	if (value.length < 1) 
		{
			printWynik(idOut, '*Wprowadz datę!');
			document.getElementById('kolor4').style.border = '3px red solid';
			blad4 = 'Brak daty urodzenia! ';
		}
	else
	{
	 printWynik(idOut, "");
	 document.getElementById('kolor4').style.border = '3px green solid';
	}
}

function sprawdzHaslo (element, idOut) {
	var value = element.value;
	var regExp2 = new RegExp('[0-9]+');
	if (regExp2.test(value) & value.length > 8) 
	{
	 document.getElementById('haslo1').style.border = '3px green solid';
	 printWynik(idOut, "");
	}
	else
	{
	 printWynik(idOut, "*Hasło powinno zawierać więcej niż 8 znaków, w tym jedną cyfrę!");
	 document.getElementById('haslo1').style.border = '3px red solid';
	 blad5 = 'Niepoprawny format hasla! ';
	}
}

function sprawdzHaslo2 () {
	var haslo1 = document.getElementById("haslo1").value;
	var haslo2 = document.getElementById("haslo2").value;
	if (haslo1 == haslo2 & haslo2.length > 8 ) 
		{
			printWynik("wynik6", "");
			document.getElementById('haslo2').style.border = '3px green solid';
		}
	else 
		{
			printWynik("wynik6", "*Hasła nie poprawne!");
			document.getElementById('haslo2').style.border = '3px red solid';
			blad6 = 'Podaj drugi raz identyczne hasło! ';

		}
}

function sprawdzDlugosc (element, idOut) {
	var value = element.value;
	if (value.length < 10) 
		{
			printWynik(idOut, "*Zbyt krótki tekst, wpisz co najmniej 10 znaków");
			document.getElementById('kolor5').style.border = '3px red solid';
			blad7 = 'Podany opis jest zbyt krótki! ';
		}
	else if (value.length < 100)
	{
	 printWynik(idOut, "");
	document.getElementById('kolor5').style.border = '3px green solid';
	}
	else 
		{
			printWynik(idOut, "*Tekst zbyt długi, przekracza 100 znaków!");
			document.getElementById('kolor5').style.border = '3px red solid';
			blad7 = 'Podany opis jest zbyt dlugi! ';
		}
}

function podsumowanie()
{

	var tekst2 = 'Wypełnij formularz! : '+ blad1 + blad2 + blad3 + blad4 + blad5 + blad6 + blad7;
	var tekstpowitania = 'Witaj '  + powitanie + ', rejestracja przebiegła pomyślnie!';

	if (tekst2.length > 30) document.getElementById("podsumowanie").innerHTML=tekst2 ;


	else document.getElementById("podsumowanie").innerHTML=tekstpowitania ;

}