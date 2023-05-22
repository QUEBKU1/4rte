<?php
	require "polacz.php";
	// require - łączy plik 
	if(isset($_POST['data']) && isset($_POST['osoby']) && isset($_POST['nr_tel'])){
		// && - i
		// isset - sprawdza czy nie jest puste
		$data=$_POST['data'];
		// $_POST - zbiera dane z forma przy metodzie post
		$osoby=$_POST['osoby'];
		$nr_tel=$_POST['nr_tel'];
		$polaczenie = mysqli_connect($adres, $uzyt, $haslo, $baza);
		// mysqli_connect - łączy z bazą 
		$zapytanie = "INSERT INTO rezerwacje VALUES(NULL, NULL, '$data', $osoby, '$nr_tel')";
		$wynik = mysqli_query($polaczenie, $zapytanie);
		// mysqli_query - nadawanie zapytania 
		if($wynik){
			echo 'Dodano rezerwację do bazy';
		}
		else {
			echo "błąd";
			// echo - wypisz
		}
		mysqli_close($polaczenie);
		// mysqli_close - zamyka połączenie
	}
?>
	