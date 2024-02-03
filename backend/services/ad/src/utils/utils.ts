import { DateRange } from '@proto/models/ad';

export const isValideDateRange = (dateRange: DateRange): boolean => {
  const startDate = new Date(dateRange.startDate);
  const endDate = new Date(dateRange.endDate);
  if (startDate < new Date()) {
    return false;
  }
  return startDate < endDate;
};
