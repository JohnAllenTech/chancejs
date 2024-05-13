// Delete if not needed
export const provinces = {
  ca: [
    { name: 'Alberta', abbreviation: 'AB' },
    { name: 'British Columbia', abbreviation: 'BC' },
    { name: 'Manitoba', abbreviation: 'MB' },
    { name: 'New Brunswick', abbreviation: 'NB' },
    { name: 'Newfoundland and Labrador', abbreviation: 'NL' },
    { name: 'Nova Scotia', abbreviation: 'NS' },
    { name: 'Ontario', abbreviation: 'ON' },
    { name: 'Prince Edward Island', abbreviation: 'PE' },
    { name: 'Quebec', abbreviation: 'QC' },
    { name: 'Saskatchewan', abbreviation: 'SK' },
    // The case could be made that the following are not actually provinces
    // since they are technically considered "territories" however they all
    // look the same on an envelope!
    { name: 'Northwest Territories', abbreviation: 'NT' },
    { name: 'Nunavut', abbreviation: 'NU' },
    { name: 'Yukon', abbreviation: 'YT' },
  ],
  it: [
    { name: 'Agrigento', abbreviation: 'AG', code: 84 },
    { name: 'Alessandria', abbreviation: 'AL', code: 6 },
    { name: 'Ancona', abbreviation: 'AN', code: 42 },
    { name: 'Aosta', abbreviation: 'AO', code: 7 },
    { name: "L'Aquila", abbreviation: 'AQ', code: 66 },
    { name: 'Arezzo', abbreviation: 'AR', code: 51 },
    { name: 'Ascoli-Piceno', abbreviation: 'AP', code: 44 },
    { name: 'Asti', abbreviation: 'AT', code: 5 },
    { name: 'Avellino', abbreviation: 'AV', code: 64 },
    { name: 'Bari', abbreviation: 'BA', code: 72 },
    { name: 'Barletta-Andria-Trani', abbreviation: 'BT', code: 72 },
    { name: 'Belluno', abbreviation: 'BL', code: 25 },
    { name: 'Benevento', abbreviation: 'BN', code: 62 },
    { name: 'Bergamo', abbreviation: 'BG', code: 16 },
    { name: 'Biella', abbreviation: 'BI', code: 96 },
    { name: 'Bologna', abbreviation: 'BO', code: 37 },
    { name: 'Bolzano', abbreviation: 'BZ', code: 21 },
    { name: 'Brescia', abbreviation: 'BS', code: 17 },
    { name: 'Brindisi', abbreviation: 'BR', code: 74 },
    { name: 'Cagliari', abbreviation: 'CA', code: 92 },
    { name: 'Caltanissetta', abbreviation: 'CL', code: 85 },
    { name: 'Campobasso', abbreviation: 'CB', code: 70 },
    { name: 'Carbonia Iglesias', abbreviation: 'CI', code: 70 },
    { name: 'Caserta', abbreviation: 'CE', code: 61 },
    { name: 'Catania', abbreviation: 'CT', code: 87 },
    { name: 'Catanzaro', abbreviation: 'CZ', code: 79 },
    { name: 'Chieti', abbreviation: 'CH', code: 69 },
    { name: 'Como', abbreviation: 'CO', code: 13 },
    { name: 'Cosenza', abbreviation: 'CS', code: 78 },
    { name: 'Cremona', abbreviation: 'CR', code: 19 },
    { name: 'Crotone', abbreviation: 'KR', code: 101 },
    { name: 'Cuneo', abbreviation: 'CN', code: 4 },
    { name: 'Enna', abbreviation: 'EN', code: 86 },
    { name: 'Fermo', abbreviation: 'FM', code: 86 },
    { name: 'Ferrara', abbreviation: 'FE', code: 38 },
    { name: 'Firenze', abbreviation: 'FI', code: 48 },
    { name: 'Foggia', abbreviation: 'FG', code: 71 },
    { name: 'Forli-Cesena', abbreviation: 'FC', code: 71 },
    { name: 'Frosinone', abbreviation: 'FR', code: 60 },
    { name: 'Genova', abbreviation: 'GE', code: 10 },
    { name: 'Gorizia', abbreviation: 'GO', code: 31 },
    { name: 'Grosseto', abbreviation: 'GR', code: 53 },
    { name: 'Imperia', abbreviation: 'IM', code: 8 },
    { name: 'Isernia', abbreviation: 'IS', code: 94 },
    { name: 'La-Spezia', abbreviation: 'SP', code: 66 },
    { name: 'Latina', abbreviation: 'LT', code: 59 },
    { name: 'Lecce', abbreviation: 'LE', code: 75 },
    { name: 'Lecco', abbreviation: 'LC', code: 97 },
    { name: 'Livorno', abbreviation: 'LI', code: 49 },
    { name: 'Lodi', abbreviation: 'LO', code: 98 },
    { name: 'Lucca', abbreviation: 'LU', code: 46 },
    { name: 'Macerata', abbreviation: 'MC', code: 43 },
    { name: 'Mantova', abbreviation: 'MN', code: 20 },
    { name: 'Massa-Carrara', abbreviation: 'MS', code: 45 },
    { name: 'Matera', abbreviation: 'MT', code: 77 },
    { name: 'Medio Campidano', abbreviation: 'VS', code: 77 },
    { name: 'Messina', abbreviation: 'ME', code: 83 },
    { name: 'Milano', abbreviation: 'MI', code: 15 },
    { name: 'Modena', abbreviation: 'MO', code: 36 },
    { name: 'Monza-Brianza', abbreviation: 'MB', code: 36 },
    { name: 'Napoli', abbreviation: 'NA', code: 63 },
    { name: 'Novara', abbreviation: 'NO', code: 3 },
    { name: 'Nuoro', abbreviation: 'NU', code: 91 },
    { name: 'Ogliastra', abbreviation: 'OG', code: 91 },
    { name: 'Olbia Tempio', abbreviation: 'OT', code: 91 },
    { name: 'Oristano', abbreviation: 'OR', code: 95 },
    { name: 'Padova', abbreviation: 'PD', code: 28 },
    { name: 'Palermo', abbreviation: 'PA', code: 82 },
    { name: 'Parma', abbreviation: 'PR', code: 34 },
    { name: 'Pavia', abbreviation: 'PV', code: 18 },
    { name: 'Perugia', abbreviation: 'PG', code: 54 },
    { name: 'Pesaro-Urbino', abbreviation: 'PU', code: 41 },
    { name: 'Pescara', abbreviation: 'PE', code: 68 },
    { name: 'Piacenza', abbreviation: 'PC', code: 33 },
    { name: 'Pisa', abbreviation: 'PI', code: 50 },
    { name: 'Pistoia', abbreviation: 'PT', code: 47 },
    { name: 'Pordenone', abbreviation: 'PN', code: 93 },
    { name: 'Potenza', abbreviation: 'PZ', code: 76 },
    { name: 'Prato', abbreviation: 'PO', code: 100 },
    { name: 'Ragusa', abbreviation: 'RG', code: 88 },
    { name: 'Ravenna', abbreviation: 'RA', code: 39 },
    { name: 'Reggio-Calabria', abbreviation: 'RC', code: 35 },
    { name: 'Reggio-Emilia', abbreviation: 'RE', code: 35 },
    { name: 'Rieti', abbreviation: 'RI', code: 57 },
    { name: 'Rimini', abbreviation: 'RN', code: 99 },
    { name: 'Roma', abbreviation: 'Roma', code: 58 },
    { name: 'Rovigo', abbreviation: 'RO', code: 29 },
    { name: 'Salerno', abbreviation: 'SA', code: 65 },
    { name: 'Sassari', abbreviation: 'SS', code: 90 },
    { name: 'Savona', abbreviation: 'SV', code: 9 },
    { name: 'Siena', abbreviation: 'SI', code: 52 },
    { name: 'Siracusa', abbreviation: 'SR', code: 89 },
    { name: 'Sondrio', abbreviation: 'SO', code: 14 },
    { name: 'Taranto', abbreviation: 'TA', code: 73 },
    { name: 'Teramo', abbreviation: 'TE', code: 67 },
    { name: 'Terni', abbreviation: 'TR', code: 55 },
    { name: 'Torino', abbreviation: 'TO', code: 1 },
    { name: 'Trapani', abbreviation: 'TP', code: 81 },
    { name: 'Trento', abbreviation: 'TN', code: 22 },
    { name: 'Treviso', abbreviation: 'TV', code: 26 },
    { name: 'Trieste', abbreviation: 'TS', code: 32 },
    { name: 'Udine', abbreviation: 'UD', code: 30 },
    { name: 'Varese', abbreviation: 'VA', code: 12 },
    { name: 'Venezia', abbreviation: 'VE', code: 27 },
    { name: 'Verbania', abbreviation: 'VB', code: 27 },
    { name: 'Vercelli', abbreviation: 'VC', code: 2 },
    { name: 'Verona', abbreviation: 'VR', code: 23 },
    { name: 'Vibo-Valentia', abbreviation: 'VV', code: 102 },
    { name: 'Vicenza', abbreviation: 'VI', code: 24 },
    { name: 'Viterbo', abbreviation: 'VT', code: 56 },
  ],
}