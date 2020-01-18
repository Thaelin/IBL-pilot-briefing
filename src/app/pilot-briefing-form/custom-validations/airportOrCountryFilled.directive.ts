import { ValidatorFn, FormGroup, ValidationErrors } from "@angular/forms";

export function airportOrCountryFilled(): ValidatorFn {
  return (group: FormGroup): ValidationErrors | null => {
    const airportsVal = group.get("airports").value;
    const countriesVal = group.get("countries").value;
    const regexpAirports = /^[A-Z]{4}( [A-Z]{4}){0,}$/g;
    const regexpCountries = /^[A-Z]{2}( [A-Z]{2}){0,}$/g;

    if (
      regexpAirports.test(airportsVal) ||
      regexpCountries.test(countriesVal)
    ) {
      return null;
    } else {
      return {
        airportOrCountryFilled: {
          value: "At least one airport, or country identifier has to be filled"
        }
      };
    }
  };
}
