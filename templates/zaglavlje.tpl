<!DOCTYPE html>
<html lang="hr"> 
    <div data="{$trenutna_stranica}"></div>
    <head>
        <title>Trčanje</title>
        <meta charset="UTF-8">
        <meta name="description" content="Knjižnica">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">

        <meta name="keywords" content="Knjižnica,knjige">
        <meta name="author" content="Matea Ilišević">
        <link rel="stylesheet" href="{$css}zaglavlje.css">
    </head>
    <body id="pokazi">

        <header>

        </header>

        <div id="navbar">

            <ul>
                {if isset($smarty.session.uloga) && $smarty.session.uloga!=4}
                    <li id="odjava"><a style="background-color: red" href={$odjava}>Odjava</a></li>
                    {/if}
                <div id="obicni">
                    {if $smarty.session.uloga==4}
                        {if $trenutna_stranica != "index.php"}
                            <li><a href="{$pocetna}">Početna</a></li>
                            {/if}
                            {if $trenutna_stranica != "rang_lista_PRIKAZ.php"}
                            <li><a href={$rang}>Rang lista</a></li>
                            {/if}
                            
                        {/if}

                    {if isset($smarty.session.uloga)}
                        {if $smarty.session.uloga <=3}
                            {if $trenutna_stranica != "rang_lista_PRIKAZ.php"}
                                <li><a href={$rang}>Rang lista</a></li>
                                {/if}
                                    

                            
                                {if $trenutna_stranica != "prijava_na_utrku_PRIKAZ.php"}
                                <li><a href={$prijava_utrka}>Prijava na utrku</a></li>
                                {/if}
                                {if $trenutna_stranica != "moja_statistika_PRIKAZ.php"}
                                <li><a href={$statistika}>Moja statistika</a></li>
                                {/if}
                            {/if}
                        {/if}
                        {if isset($smarty.session.uloga) && $smarty.session.uloga <= 2}
                            {if $trenutna_stranica != "etape_koje_vodim_PRIKAZ.php"}
                            <li><a href={$vodim_etape}>Etape koje vodim</a></li>
                            {/if}
                            {if $trenutna_stranica != "statistika_mod_PRIKAZ.php"}
                            <li><a href={$etape}>Završene/nezavršene</a></li>
                            {/if}



                    {/if}
                    {if isset($smarty.session.uloga) && $smarty.session.uloga <= 1}
                        {if $trenutna_stranica != "definiranje_utrke_PRIKAZ.php"}
                            <li><a href={$def_utrka}>Definiranje utrke</a></li>
                            {/if}
                            {if $trenutna_stranica != "definiranje_drzave_PRIKAZ.php"}
                            <li><a href={$def_drzava}>Definiranje države</a></li>
                            {/if}
                            {if $trenutna_stranica != "korisnicki_racuni_PRIKAZ.php"}
                            <li><a href={$racuni}>Korisnicki racuni</a></li>
                            {/if}
                            {if $trenutna_stranica != "dnevnik_PRIKAZ.php"}
                            <li><a href={$dnevnik}>Dnevnik</a></li>
                            {/if}
                            {if $trenutna_stranica != "statistika_rada_sustava_PRIKAZ.php"}
                            <li><a href={$nezavrsene}>Statistika sustava</a></li>
                            {/if}
                        {/if}

                </div>
                {if $smarty.session.uloga==4}
                    <div id="public">
                        {if $trenutna_stranica != "registracija.php"}
                            <li><a href={$registracija}>Registracija</a></li>
                            {/if}
                            {if $trenutna_stranica != "prijava.php"}
                            <li><a href={$prijava}>Prijava</a></li>
                            {/if}

                    </div>
                {/if}
                


            </ul>
        </div>

