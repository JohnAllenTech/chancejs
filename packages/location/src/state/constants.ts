import { countiesObject } from 'src/counties'

// Delete if not needed
export const states = {
  us: [
    { name: 'Alabama', abbreviation: 'AL' },
    { name: 'Alaska', abbreviation: 'AK' },
    { name: 'Arizona', abbreviation: 'AZ' },
    { name: 'Arkansas', abbreviation: 'AR' },
    { name: 'California', abbreviation: 'CA' },
    { name: 'Colorado', abbreviation: 'CO' },
    { name: 'Connecticut', abbreviation: 'CT' },
    { name: 'Delaware', abbreviation: 'DE' },
    { name: 'District of Columbia', abbreviation: 'DC' },
    { name: 'Florida', abbreviation: 'FL' },
    { name: 'Georgia', abbreviation: 'GA' },
    { name: 'Hawaii', abbreviation: 'HI' },
    { name: 'Idaho', abbreviation: 'ID' },
    { name: 'Illinois', abbreviation: 'IL' },
    { name: 'Indiana', abbreviation: 'IN' },
    { name: 'Iowa', abbreviation: 'IA' },
    { name: 'Kansas', abbreviation: 'KS' },
    { name: 'Kentucky', abbreviation: 'KY' },
    { name: 'Louisiana', abbreviation: 'LA' },
    { name: 'Maine', abbreviation: 'ME' },
    { name: 'Maryland', abbreviation: 'MD' },
    { name: 'Massachusetts', abbreviation: 'MA' },
    { name: 'Michigan', abbreviation: 'MI' },
    { name: 'Minnesota', abbreviation: 'MN' },
    { name: 'Mississippi', abbreviation: 'MS' },
    { name: 'Missouri', abbreviation: 'MO' },
    { name: 'Montana', abbreviation: 'MT' },
    { name: 'Nebraska', abbreviation: 'NE' },
    { name: 'Nevada', abbreviation: 'NV' },
    { name: 'New Hampshire', abbreviation: 'NH' },
    { name: 'New Jersey', abbreviation: 'NJ' },
    { name: 'New Mexico', abbreviation: 'NM' },
    { name: 'New York', abbreviation: 'NY' },
    { name: 'North Carolina', abbreviation: 'NC' },
    { name: 'North Dakota', abbreviation: 'ND' },
    { name: 'Ohio', abbreviation: 'OH' },
    { name: 'Oklahoma', abbreviation: 'OK' },
    { name: 'Oregon', abbreviation: 'OR' },
    { name: 'Pennsylvania', abbreviation: 'PA' },
    { name: 'Rhode Island', abbreviation: 'RI' },
    { name: 'South Carolina', abbreviation: 'SC' },
    { name: 'South Dakota', abbreviation: 'SD' },
    { name: 'Tennessee', abbreviation: 'TN' },
    { name: 'Texas', abbreviation: 'TX' },
    { name: 'Utah', abbreviation: 'UT' },
    { name: 'Vermont', abbreviation: 'VT' },
    { name: 'Virginia', abbreviation: 'VA' },
    { name: 'Washington', abbreviation: 'WA' },
    { name: 'West Virginia', abbreviation: 'WV' },
    { name: 'Wisconsin', abbreviation: 'WI' },
    { name: 'Wyoming', abbreviation: 'WY' },
  ],

  us_territories: [
    { name: 'American Samoa', abbreviation: 'AS' },
    { name: 'Federated States of Micronesia', abbreviation: 'FM' },
    { name: 'Guam', abbreviation: 'GU' },
    { name: 'Marshall Islands', abbreviation: 'MH' },
    { name: 'Northern Mariana Islands', abbreviation: 'MP' },
    { name: 'Puerto Rico', abbreviation: 'PR' },
    { name: 'Virgin Islands, U.S.', abbreviation: 'VI' },
  ],

  us_armed_forces: [
    { name: 'Armed Forces Europe', abbreviation: 'AE' },
    { name: 'Armed Forces Pacific', abbreviation: 'AP' },
    { name: 'Armed Forces the Americas', abbreviation: 'AA' },
  ],

  it: [
    { name: "Valle d'Aosta", abbreviation: 'VDA' },
    { name: 'Piemonte', abbreviation: 'PIE' },
    { name: 'Lombardia', abbreviation: 'LOM' },
    { name: 'Veneto', abbreviation: 'VEN' },
    { name: 'Trentino Alto Adige', abbreviation: 'TAA' },
    { name: 'Friuli Venezia Giulia', abbreviation: 'FVG' },
    { name: 'Liguria', abbreviation: 'LIG' },
    { name: 'Emilia Romagna', abbreviation: 'EMR' },
    { name: 'Toscana', abbreviation: 'TOS' },
    { name: 'Umbria', abbreviation: 'UMB' },
    { name: 'Marche', abbreviation: 'MAR' },
    { name: 'Abruzzo', abbreviation: 'ABR' },
    { name: 'Lazio', abbreviation: 'LAZ' },
    { name: 'Campania', abbreviation: 'CAM' },
    { name: 'Puglia', abbreviation: 'PUG' },
    { name: 'Basilicata', abbreviation: 'BAS' },
    { name: 'Molise', abbreviation: 'MOL' },
    { name: 'Calabria', abbreviation: 'CAL' },
    { name: 'Sicilia', abbreviation: 'SIC' },
    { name: 'Sardegna', abbreviation: 'SAR' },
  ],
  mx: [
    { name: 'Aguascalientes', abbreviation: 'AGU' },
    { name: 'Baja California', abbreviation: 'BCN' },
    { name: 'Baja California Sur', abbreviation: 'BCS' },
    { name: 'Campeche', abbreviation: 'CAM' },
    { name: 'Chiapas', abbreviation: 'CHP' },
    { name: 'Chihuahua', abbreviation: 'CHH' },
    { name: 'Ciudad de México', abbreviation: 'DIF' },
    { name: 'Coahuila', abbreviation: 'COA' },
    { name: 'Colima', abbreviation: 'COL' },
    { name: 'Durango', abbreviation: 'DUR' },
    { name: 'Guanajuato', abbreviation: 'GUA' },
    { name: 'Guerrero', abbreviation: 'GRO' },
    { name: 'Hidalgo', abbreviation: 'HID' },
    { name: 'Jalisco', abbreviation: 'JAL' },
    { name: 'México', abbreviation: 'MEX' },
    { name: 'Michoacán', abbreviation: 'MIC' },
    { name: 'Morelos', abbreviation: 'MOR' },
    { name: 'Nayarit', abbreviation: 'NAY' },
    { name: 'Nuevo León', abbreviation: 'NLE' },
    { name: 'Oaxaca', abbreviation: 'OAX' },
    { name: 'Puebla', abbreviation: 'PUE' },
    { name: 'Querétaro', abbreviation: 'QUE' },
    { name: 'Quintana Roo', abbreviation: 'ROO' },
    { name: 'San Luis Potosí', abbreviation: 'SLP' },
    { name: 'Sinaloa', abbreviation: 'SIN' },
    { name: 'Sonora', abbreviation: 'SON' },
    { name: 'Tabasco', abbreviation: 'TAB' },
    { name: 'Tamaulipas', abbreviation: 'TAM' },
    { name: 'Tlaxcala', abbreviation: 'TLA' },
    { name: 'Veracruz', abbreviation: 'VER' },
    { name: 'Yucatán', abbreviation: 'YUC' },
    { name: 'Zacatecas', abbreviation: 'ZAC' },
  ],
  uk: countiesObject.uk.map(county => {
    return { ...county, abbreviation: '' }
  }),
}