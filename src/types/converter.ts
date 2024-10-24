export type ConversionType = 'temperature' | 'length' | 'volume' | 'weight';

export interface UnitConfig {
  type: ConversionType;
  label: string;
  fromUnit: string;
  toUnit: string;
  convert: (value: number) => number;
  reverseConvert: (value: number) => number;
}

export interface ConverterProps {
  onValueChange: (fromValue: string, toValue: string) => void;
  fromValue: string;
  toValue: string;
}