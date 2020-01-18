import { ValidatorFn, FormGroup, ValidationErrors } from "@angular/forms";

export function atLeastOneMessageTypeChecked(): ValidatorFn {
  return (group: FormGroup): ValidationErrors | null => {
    const metarChecked = group.get("metarChecked").value;
    const sigmetChecked = group.get("sigmetChecked").value;
    const tafChecked = group.get("tafChecked").value;

    if (metarChecked || sigmetChecked || tafChecked) {
      return null;
    } else {
      return {
        atLeastOneMessageTypeChecked: {
          value: "At least one message type has to be selected"
        }
      };
    }
  };
}
