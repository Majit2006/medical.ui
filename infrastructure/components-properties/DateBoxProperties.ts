import { IDateBoxOptions } from "~/infrastructure/interfaces/components-properties/IDateBoxOptions";

const defaultOptions = {
  pickerType: "calendar",
  dateSerializationFormat: "yyyy-MM-dd",
  type: "date",
  applyButtonText: "Hawa",
  readonly: false,
  disabled: false,
  openOnFieldClick: true,
  showClearButton: true,
  acceptCustomValue: true,
  stylingMode: "outlined",
  applyValueMode: "instantly",
};

export class DateBoxProperties {
  pickerType: string;
  dateSerializationFormat: string;
  type: string;
  min?: string;
  max?: string;
  applyButtonText?: string;
  readonly: boolean;
  disabled: boolean;
  openOnFieldClick: boolean;
  showClearButton: boolean;
  acceptCustomValue?: boolean;
  stylingMode: string;
  onValueChanged?: (event: any) => void;
  constructor(options?: IDateBoxOptions) {
    options = Object.assign({}, defaultOptions, options);
    this.pickerType = options?.pickerType;
    this.dateSerializationFormat = options?.dateSerializationFormat;
    this.type = options?.type;
    this.min = options?.min;
    this.max = options?.max;
    this.applyButtonText = options?.applyButtonText;
    this.readonly = options?.readOnly;
    this.disabled = options?.disabled;
    this.openOnFieldClick = options?.openOnFieldClick;
    this.showClearButton = options?.showClearButton;
    this.acceptCustomValue = options?.acceptCustomValue;
    this.stylingMode = options?.stylingMode;
  }
}
