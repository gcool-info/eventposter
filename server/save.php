<?php

	/* Check whether data exists */
	if (!isset($_POST["data"]))
		return false;


	/* $new_data contains the data received. */
	$new_data = $_POST["data"];

	/*$data_to_write contains the data we will write to the file. */
	$data_to_write = [];

	/* Open & read the db file */
	$handle = fopen("db.json", "r");
	$old_data = fread($handle, filesize("db.json"));
	fclose($handle);

	/* If the new data hasn't affected all elements of the db file, then we only apply changes to certain ones */
	$old_data = json_decode($old_data);
	foreach ($old_data as $key => $value) {
		
		if ($new_data[$key]) {
			$data_to_write[$key] = $new_data[$key];
		} else {
			$data_to_write[$key] = $value;
		}
	}

	/* Write the changes to the file */
	$handle = fopen("db.json", "w");
	fwrite($handle, json_encode($data_to_write));
	fclose($handle);

?>