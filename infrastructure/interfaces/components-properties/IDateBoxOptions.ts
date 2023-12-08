export interface IDateBoxOptions {
  pickerType?: string;
  dateSerializationFormat?: string;
  stylingMode?: string;
  type?: string;
  min?: string;
  max?: string;
  applyButtonText?: string;
  readOnly?: boolean;
  disabled?: boolean;
  openOnFieldClick?: boolean;
  showClearButton?: boolean;
  acceptCustomValue?: boolean;
  applyValueMode?: string;
  onValueChanged?: (event: any) => void;
}
